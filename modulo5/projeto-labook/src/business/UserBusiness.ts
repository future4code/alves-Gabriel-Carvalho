import { AuthenticationError } from "./../errors/AuthenticationError";
import { ConflictError } from "./../errors/ConflictError";
import { ParamsError } from "./../errors/ParamsError";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
  User,
  USER_ROLES,
} from "./../models/User";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const { name, email, password } = input;

    if (typeof email !== "string") {
      throw new ParamsError();
    }
    if (typeof password !== "string") {
      throw new ParamsError();
    }
    if (name.length < 3) {
      throw new ParamsError("O nome deve ter no mínimo 3 caracteres");
    }
    if (password.length < 6) {
      throw new ParamsError("A senha deve ter no mínimo 6 caracteres");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
    const userDB = await this.userDatabase.findByEmail(email);

    if (userDB) {
      throw new ConflictError("Email já cadastrado");
    }
    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Usuário cadastrado com sucesso",
      token,
    };
    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;
    if (typeof email !== "string") {
      throw new ParamsError();
    }
    if (typeof password !== "string") {
      throw new ParamsError();
    }
    if (password.length < 6) {
      throw new ParamsError("A senha deve ter no mínimo 6 caracteres");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
    const userDB = await this.userDatabase.findByEmail(email);

    if (!userDB) {
      throw new AuthenticationError();
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new AuthenticationError();
    }
    const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Usuário logado com sucesso",
      token,
    };
    return response;
  };
}
