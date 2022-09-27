import { checkCharacters } from "./exercicios/checkCharacters";
describe(" Testando a checkIfNumber", () => {
  test("A saída deve indicar a quantidade de caracteres da entrada ", () => {
    const input = "gabriel";
    const output = checkCharacters(input);
    expect(output).toBe(7);
  });
});
