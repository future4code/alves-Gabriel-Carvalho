import { ResidentialClient, residentialClient1 } from "./ResidentialClient";
import { IndustrialClient, industrialClient1 } from "./IndustrialClient";
import { CommercialClient, commercialClient1 } from "./CommercialClient";
import { Client } from "./Client";

export class ClientManager {
  private clients: Client[] = [];

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public registerClient(client: Client): void {
    this.clients.push(client);
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });
    if (foundClient) {
      return foundClient.calculateBill();
    }
    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    for (const client of this.clients) {
      total += client.calculateBill();
    }
    return total;
  }

  public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }
}

export const clientManager = new ClientManager();

clientManager.registerClient(residentialClient1);
clientManager.registerClient(commercialClient1);
clientManager.registerClient(industrialClient1);
