import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialReg: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }
  public getIndustrialReg(): string {
    return this.industrialReg;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}

export const industrialClient1 = new IndustrialClient(
  "Industria",
  3,
  100,
  "555-555",
  10,
  "77777-77"
);
