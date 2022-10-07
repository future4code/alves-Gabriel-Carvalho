import { IProductDB, Product } from "./../models/Products";
import { ProductDatabase } from "../database/ProductDatabase";
import { Authenticator } from "../services/Authenticator";
import { productsJson } from "../database/migrations/data";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
  constructor(
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public insert = async () => {
    const mapId = productsJson.map((product: IProductDB): string => {
      return product.id;
    });
    const mapName = productsJson.map((product: IProductDB): string => {
      return product.name;
    });

    const mapTags = productsJson.map((product: IProductDB): string[] => {
      return product.tags;
    });

    for (let i = 0; i < mapId.length; ++i) {
      await this.productDatabase.insertData(mapId[i], mapName[i], mapTags[i]);
    }

    const id = this.idGenerator.generate();

    const token = this.authenticator.generateToken(id);

    const response = {
      message: "Dados inseridos com sucesso",
      token,
    };
    return response;
  };
}
