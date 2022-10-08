export interface IProductDB {
  id: string;
  name: string;
  tags: string[];
}

export interface ICreateProductInputDTO {
  id: string;
  name: string;
  tags: string[];
}

export interface IGetProductsInputDTO {
  token: string;
  search: string;
  order: string;
  sort: string;
  limit: string;
  page: string;
}

export interface IGetProductsDBDTO {
  search: string;
  order: string;
  sort: string;
  limit: number;
  offset: number;
}
export interface IGetProducts {
  id: string;
  name: string;
  tags: string[];
}
export interface IGetProductsOutputDTO {
  products: IGetProducts[];
}

export class Product {
  constructor(
    private id: string,
    public name: string,
    private tags: string[]
  ) {}
  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getTags = () => {
    return this.tags;
  };

  public static mapProductsToFront = (productsDB: IProductDB[]) => {
    return productsDB.map((productDB) => {
      const product = new Product(productDB.id, productDB.name, productDB.tags);

      const productResponse: IGetProducts = {
        id: product.getId(),
        name: product.getName(),
        tags: JSON.parse(product.getTags().toString()),
      };

      return productResponse;
    });
  };
}
