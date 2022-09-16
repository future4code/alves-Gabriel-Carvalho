import { User } from "./User";
export class Employee extends User {
  protected admissionDate: Date;
  protected baseSalary: number;
  protected static BENEFITS_VALUE: number = 400;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }
  public getAdmissionDate(): Date {
    return this.admissionDate;
  }
  public getBaseSalary(): number {
    return this.baseSalary;
  }
  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}

export const employee1 = new Employee(
  "1",
  "employee@dev.com",
  "Employee",
  "1234",
  new Date(),
  3000
);
