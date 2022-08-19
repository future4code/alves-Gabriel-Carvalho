type Clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

type Conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const arrayClientes: Clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

export function retornaDebitos(arrayClientes: Clientes[]): Conta[] {
  arrayClientes.forEach((cliente) => {
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= totalDebitos;
    cliente.debitos = [];
  });
  const contasNegativas = arrayClientes.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;
}
