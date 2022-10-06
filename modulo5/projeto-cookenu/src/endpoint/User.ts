import { RecipeData } from "./../data/RecipeData";
import { USER_ROLES } from "./../model/User";
import { MissingToken } from "./../error/MissingToken";
import { InvalidCredentials } from "./../error/InvalidCredentials";
import { Authenticator } from "./../services/Authenticator";
import { HashManager } from "./../services/HashManager";
import { IdGenerator } from "./../services/IdGenerator";
import { ValidatePassword } from "./../error/ValidatePassword";
import { EmailExists } from "./../error/EmailExists";
import { UserData } from "./../data/UserData";
import { MissingFields } from "./../error/MissingFields";
import { Request, Response } from "express";
import { User } from "../model/User";

export class UserEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
        throw new MissingFields();
      }

      if (password.length < 6) {
        throw new ValidatePassword();
      }

      if (
        role.toUpperCase() !== USER_ROLES.NORMAL &&
        role.toUpperCase() !== USER_ROLES.ADMIN
      ) {
        throw new Error("User must be NORMAL or ADMIN");
      }

      const userData = new UserData();

      const emailExists = await userData.getUserByEmail(email);

      if (emailExists) {
        throw new EmailExists();
      }

      const id = new IdGenerator().generateId();

      const hashPassword = await new HashManager().hash(password);

      const user = new User(id, name, email, hashPassword, role);

      const response = await userData.createUser(user);

      const token = new Authenticator().generateToken({ id, role });

      res.status(201).send({ message: response, token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingFields();
      }

      const userData = new UserData();

      const user = await userData.getUserByEmail(email);

      if (!user) {
        throw new InvalidCredentials();
      }

      const comparePassword = await new HashManager().compare(
        password,
        user.getPassword()
      );

      if (!comparePassword) {
        throw new InvalidCredentials();
      }

      const token = new Authenticator().generateToken({
        id: user.getId(),
        role: user.getRole(),
      });

      res.status(200).send({ message: "User successfully logged in", token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new MissingToken();
      }

      const id = new Authenticator().getTokenData(token);

      const user = await new UserData().getUserById(id);

      res.status(200).send(user);

      console.log(id);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getAnotherProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const idAnotherUser = req.params.id;

      if (!token) {
        throw new MissingToken();
      }

      new Authenticator().getTokenData(token);

      const userData = new UserData();
      const searchUser = await userData.getUserById(idAnotherUser);

      if (!searchUser) {
        throw new Error("User not found");
      }

      res.status(200).send(searchUser);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async follow(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const { idFollowed } = req.body;

      if (!token) {
        throw new MissingToken();
      }

      const id = new Authenticator().getTokenData(token);

      const userData = new UserData();
      const followUser = await userData.postFollow(id, idFollowed);

      res.status(200).send({ message: followUser });
    } catch (error: any) {
      if (error.sqlMessage.includes("Duplicate entry")) {
        res
          .status(500)
          .send({ message: "You are already following this user" });
      }
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async unfollow(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const { idFollowed } = req.body;

      if (!token) {
        throw new MissingToken();
      }

      const id = new Authenticator().getTokenData(token);

      const userData = new UserData();
      const followUser = await userData.deleteFollow(id, idFollowed);

      res.status(200).send({ message: followUser });
    } catch (error: any) {
      if (error.sqlMessage.includes("Duplicate entry")) {
        res
          .status(500)
          .send({ message: "You are already following this user" });
      }
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async feed(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new MissingToken();
      }

      const id = new Authenticator().getTokenData(token);

      const userData = new UserData();

      const feed = await userData.getFeed(id);
      res.status(200).send(feed);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const delUserId = req.params.id;

      if (!token) {
        throw new MissingToken();
      }

      const userId = new Authenticator().getTokenData(token);

      const userData = new UserData();
      const searchUser = await userData.getUserById(delUserId);

      if (!searchUser) {
        throw new Error("User not found");
      }

      if (userId.role === USER_ROLES.NORMAL && searchUser.id !== userId.id) {
        throw new Error("Only admins can delete accounts");
      }
      const recipeData = new RecipeData();

      const recipes = await recipeData.getRecipeByUserId(searchUser.id);

      if (!recipes) {
        throw new Error("Recipes not found");
      }

      if (recipes?.length > 0) {
        for (const recipe of recipes) {
          await recipeData.deleteRecipe(recipe.getId());
        }
      }

      await userData.deleteFollowIn(searchUser.id);
      await userData.deleteFollowOut(searchUser.id);

      await userData.deleteUser(searchUser.id);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
