import { checkIfEven } from "./exercicios/checkIfEven";
describe("Testando a checkIfEven", () => {
  test("A entrada 10 deve retornar true", () => {
    const input = 10;
    const output = checkIfEven(input);
    expect(output).toBe(true);
  });
  test("A entrada 5 deve retornar false", () => {
    const input = 5;
    const output = checkIfEven(input);
    expect(output).toBe(false);
  });
});
