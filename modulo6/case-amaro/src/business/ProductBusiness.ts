import {
  IGetProductsDBDTO,
  IGetProductsInputDTO,
  IGetProductsOutputDTO,
  IProductDB,
  Product,
} from "./../models/Products";
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

  public getProductsByNameOrTag = async (input: IGetProductsInputDTO) => {
    const token = input.token;
    const search = input.search || "";
    const order = input.order || "ASC";
    const sort = input.sort || "name";
    const limit = Number(input.limit) || 10;
    const page = Number(input.page) || 1;

    const offset = limit * (page - 1);

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    const getProductsInputDB: IGetProductsDBDTO = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const productsDB = await this.productDatabase.getProductsByNameOrTag(
      getProductsInputDB
    );

    const products = Product.mapProductsToFront(productsDB);

    const response: IGetProductsOutputDTO = {
      products,
    };

    return response;
  };
}
