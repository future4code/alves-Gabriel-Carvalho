import { checkAge } from "./exercicios/checkAge";
describe(" Testando a checkIfAverage", () => {
  test("A saída deve ser a idade", () => {
    const input = 1996;
    const output = checkAge(input);
    expect(output).toBe(26);
  });
});
