import { Employee } from "./Employee";

export class Seller extends Employee {
  private salesQuantity: number = 0;
  protected static SELLING_COMMISSION: number = 5;

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }
  public setSalesQuantity(quantity: number): void {
    this.salesQuantity = quantity;
  }
  public calculateTotalSalary(): number {
    return (
      this.baseSalary +
      Seller.BENEFITS_VALUE +
      Seller.SELLING_COMMISSION * this.salesQuantity
    );
  }
}

export const seller1 = new Seller(
  "2",
  "seller@dev.com",
  "Seller",
  "12345",
  new Date(),
  5000
);
