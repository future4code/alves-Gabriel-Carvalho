import { checkIfNumber } from "./exercicios/checkIfNumber";
describe(" Testando a checkIfNumber", () => {
  test("O tipo da saída deve ser number", () => {
    const input = "13";
    const output = checkIfNumber(input);
    expect(typeof output).toBe("number");
  });
});
