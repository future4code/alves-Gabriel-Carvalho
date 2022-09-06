import { Place } from "./Place";

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export const commerce1 = new Commerce(2, "8888888888");
