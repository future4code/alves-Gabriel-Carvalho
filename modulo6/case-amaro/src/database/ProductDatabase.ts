import { IProductDB, Product } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Case_Amaro_Products";
  public static TABLE_TAGS = "Case_Amaro_Tags";

  public toProductDBModel = (product: Product): IProductDB => {
    const productDB: IProductDB = {
      id: product.getId().toString(),
      name: product.getName(),
      tags: product.getTags(),
    };
    return productDB;
  };

  insertData = async (id: number, name: string, tags: string[]) => {
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
      .insert({
        id: id,
        name: name,
        tags: JSON.stringify(tags),
      })
      .onDuplicateUpdate("id", "name", "tags");
  };
}
