export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  calculateBill(): number;
}

export const client: Client = {
  name: "Gabriel",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
