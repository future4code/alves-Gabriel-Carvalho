import { USER_ROLES } from "./../model/User";
import { RecipeData } from "./../data/RecipeData";
import { Authenticator } from "./../services/Authenticator";
import { MissingToken } from "./../error/MissingToken";
import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import { Recipe } from "../model/Recipe";
import { IdGenerator } from "../services/IdGenerator";
import moment from "moment";

export class RecipeEndpoint {
  async create(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const { title, description } = req.body;

      if (!title || !description) {
        throw new MissingFields();
      }

      if (!token) {
        throw new MissingToken();
      }

      const userId = new Authenticator().getTokenData(token);
      const recipeId = new IdGenerator().generateId();
      const date = new Date();

      const recipe = new Recipe(recipeId, title, description, date, userId.id);

      const recipeData = new RecipeData();
      const response = await recipeData.createRecipe(recipe);

      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getRecipe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const id = req.params.id;

      if (!token) {
        throw new Error("Missing token");
      }

      new Authenticator().getTokenData(token);

      const recipeData = new RecipeData();
      const searchRecipe = await recipeData.getRecipeById(id);

      if (!searchRecipe) {
        throw new Error("Recipe not found");
      }

      searchRecipe.setDate(
        moment(searchRecipe.getCreationDate(), "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        )
      );

      res.status(200).send(searchRecipe);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const recipeId = req.params.id;
      const { title, description } = req.body;

      if (!title || !description) {
        throw new MissingFields();
      }

      if (!token) {
        throw new MissingToken();
      }

      const userId = new Authenticator().getTokenData(token);

      const recipeData = new RecipeData();
      const searchRecipe = await recipeData.getRecipeById(recipeId);

      if (!searchRecipe) {
        throw new Error("Recipe not found");
      }

      if (
        userId.role !== USER_ROLES.ADMIN &&
        searchRecipe.getUserId() !== userId.id
      ) {
        throw new Error("Only admins can edit recipes");
      }

      const response = await recipeData.editRecipe(
        userId.id,
        title,
        description
      );
      res.status(200).send({ message: response });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const recipeId = req.params.id;

      if (!token) {
        throw new MissingToken();
      }

      const userId = new Authenticator().getTokenData(token);

      const recipeData = new RecipeData();
      const searchRecipe = await recipeData.getRecipeById(recipeId);

      if (!searchRecipe) {
        throw new Error("Recipe not found");
      }

      if (
        userId.role !== USER_ROLES.ADMIN &&
        searchRecipe.getUserId() !== userId.id
      ) {
        throw new Error("Only admins can delete recipes");
      }

      const response = await recipeData.deleteRecipe(recipeId);
      res.status(200).send({ message: response });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
