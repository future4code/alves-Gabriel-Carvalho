import { employee1 } from "./Employee";
import { clientManager } from "./ClientManager";
import { commerce1 } from "./Commerce";
import { industry1 } from "./Industry";
import { residence1 } from "./Residence";
import { customer1 } from "./Customer";
import { user1 } from "./User";
import { client } from "./Client";
import { residentialClient1 } from "./ResidentialClient";
import { commercialClient1 } from "./CommercialClient";
import { industrialClient1 } from "./IndustrialClient";
import { seller1 } from "./Seller";

// Herança
// 1.
// a. Não, pois não foi feita uma função de get para a senha.
// b. Uma vez.

// console.log(user1.getId());
// console.log(user1.getEmail());
// console.log(user1.getName());

// 2.
// a. Uma vez
// b. Duas vezes, pois quando se cria o Customer, também se cria o User.

// console.log(customer1.getName());

// 3.
// a. Também não é possível imprimir, pois não foi feita uma função de get para a senha na classe User.

// console.log(customer1.getCreditCard());
// console.log(customer1.purchaseTotal);

// 4. / 5.
// console.log(customer1.introduceYourself);

// 6.
// console.log(employee1.getAdmissionDate());

// 7.
// console.log(employee1.calculateTotalSalary());

// 8.
// console.log(seller1.getBaseSalary());

// 9.
// seller1.setSalesQuantity(10);
// console.log(seller1.getSalesQuantity());

// 10.
// console.log(seller1.calculateTotalSalary());

// 11.
// console.log(seller1.calculateTotalSalary());

// Polimorfismo
// 1. Foi possível imprimir todas as propriedades

// console.log(client.name);
// console.log(client.registrationNumber);
// console.log(client.consumedEnergy);
// console.log(client.calculateBill());

// 2.
// a. "Não é possível criar uma instância de uma classe abstrata."
// b. Remover a palavra reservada "abstract"

// 3.
// console.log(residence1.getCep());
// console.log(commerce1.getCep());
// console.log(industry1.getCep());

// 4.
// console.log(residentialClient1.calculateBill());

// 5.
// console.log(commercialClient1.calculateBill());

// 6.
// console.log(industrialClient1.calculateBill());

// 7.
// console.log(clientManager.calculateBillOfClient(1));
// console.log(clientManager.calculateTotalIncome());
// console.log(clientManager.deleteUser(2));
