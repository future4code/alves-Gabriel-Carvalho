import { checkIfUpperCase } from "./exercicios/checkIfUpperCase";
describe(" Testando a checkIfUpperCase", () => {
  test("A saída deve ser retornada em maiúsculo ", () => {
    const input = "gAbRiEl";
    const output = checkIfUpperCase(input);
    expect(output).toBe("GABRIEL");
  });
});
