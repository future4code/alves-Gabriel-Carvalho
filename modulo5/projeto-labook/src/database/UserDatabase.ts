import { IUserDB } from "./../models/User";
import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";
import { isErrored } from "stream";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  private userModelDB = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };
    return userDB;
  };

  public findByEmail = async (email: string) => {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select("*")
      .where({ email });
    return result[0];
  };
  public createUser = async (user: User) => {
    const userDB = this.userModelDB(user);
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };
}
