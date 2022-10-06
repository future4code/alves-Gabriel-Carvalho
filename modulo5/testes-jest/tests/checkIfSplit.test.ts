import { checkIfSplit } from "./exercicios/checkIfSplit";
describe(" Testando a checkIfSplit", () => {
  test("A saída deve ser retornada forma de array", () => {
    const input = "gabriel";
    const output = checkIfSplit(input);
    expect(output).toEqual(["g", "a", "b", "r", "i", "e", "l"]);
  });
});
