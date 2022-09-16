import { Client } from "./Client";
import { Place } from "./Place";

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  public getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
}

export const residence1 = new Residence(5, "999999999");
