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
}
