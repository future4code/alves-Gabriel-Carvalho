import { checkIfAverage } from "./exercicios/checkIfAverage";
describe(" Testando a checkIfAverage", () => {
  test("A saída deve ser a média arredondada pra cima dos números do array", () => {
    const input = [1, 2, 3, 4];
    const output = checkIfAverage(input);
    expect(output).toBe(3);
  });
});
