// type Transaction = {
//   description: string;
//   value: number;
//   date: string;
// };

export class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

//2
export const transaction1: Transaction = new Transaction(
  "Pix",
  13,
  "05/09/2022"
);
