import { checkIfRandom } from "./exercicios/checkIfRandom";
describe(" Testando a checkIfRandom", () => {
  test("A saída deve ser um número aleatório entre 0 e 10", () => {
    const output = checkIfRandom();
    expect(output >= 0 && output <= 10).toBe(true);
  });
});
