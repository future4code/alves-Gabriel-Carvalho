import { Recipe } from "./../model/Recipe";
import BaseDataBase from "./BaseDataBase";

export class RecipeData extends BaseDataBase {
  private static tableName = "recipe_cookenu";

  async createRecipe(recipe: Recipe): Promise<string> {
    await this.getConnection()
      .insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        creation_date: recipe.getCreationDate(),
        user_id: recipe.getUserId(),
      })
      .into(RecipeData.tableName);

    return `Recipe created with success`;
  }

  async editRecipe(
    userId: string,
    title: string,
    description: string
  ): Promise<string> {
    await this.getConnection()
      .update({
        title,
        description,
      })
      .from(RecipeData.tableName)
      .where({ user_id: userId });

    return `Recipe updated with success`;
  }

  async deleteRecipe(id: string): Promise<string> {
    await this.getConnection()
      .delete()
      .from(RecipeData.tableName)
      .where({ id });

    return `Recipe deleted with success`;
  }

  public async getRecipeById(id: string): Promise<Recipe | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(RecipeData.tableName)
      .where({ id });

    if (!result.length) {
      return undefined;
    }
    return new Recipe(
      result[0].id,
      result[0].title,
      result[0].description,
      result[0].creation_date,
      result[0].user_id
    );
  }

  public async getRecipeByUserId(id: string): Promise<Recipe[] | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(RecipeData.tableName)
      .where({ user_id: id });

    if (!result.length) {
      return undefined;
    }

    const typeRecipe = result.map((recipe: any) => {
      return new Recipe(
        recipe[0].id,
        recipe[0].title,
        recipe[0].description,
        recipe[0].creation_date,
        recipe[0].user_id
      );
    });
    return typeRecipe;
  }
}
