import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  public getCnpj(): string {
    return this.cnpj;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

export const commercialClient1 = new CommercialClient(
  "Loja",
  2,
  100,
  "789456123-00",
  2,
  "88888-88"
);
