import { Transaction } from "./types";

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[];

  constructor(
    cpf: string,
    name: string,
    age: number,
    transactions: Transaction[]
  ) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.transactions = transactions;
  }
  public getTransactions() {
    return this.transactions;
  }
}

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
  public getAccounts() {
    return this.accounts;
  }
}

//1
// a. O construtor é um método que serve para definir os atributos da classe.
// b. const user1: UserAccount = new UserAccount("123456789-00", "Gabriel", 26); Uma vez.
// c. Acessamos as propriedades privadas de uma classe gerando getters e setters públicos para cada propriedade.

//2

const transaction1: Transaction = new Transaction("Pix", 13, "05/09/2022");

const user1: UserAccount = new UserAccount("123456789-00", "Teste", 50, [
  transaction1,
]);

const bank: Bank = new Bank([user1]);

// console.log(transaction1);
// console.log(user1);
// console.log(bank);

console.log(bank.getAccounts()[0].getTransactions());
