import { Residence } from "./Residence";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }
  public getCpf(): string {
    return this.cpf;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

export const residentialClient1 = new ResidentialClient(
  "Gabriel",
  1,
  100,
  "123.456.789-00",
  5,
  "99999-00"
);
