import { checkNewDate } from "./exercicios/checkNewDate";
describe(" Testando a checkIfAverage", () => {
  test("A saída deve ser a data formatada", () => {
    const input = "1996/01/16";
    const output = checkNewDate(input);
    expect(output).toEqual("16/01/1996");
  });
});
