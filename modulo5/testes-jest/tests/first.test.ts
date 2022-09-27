import { ITask, tasks } from "./tests";
describe("Praticando com Jest", () => {
  test("O número 100 é maior que o número 99", () => {
    expect(100).toBeGreaterThan(99);
  });
  test("10 multiplicado por 2 é 20", () => {
    expect(10 * 2).toBe(20);
  });
  test("A tarefa 'Estudar testes com Jest' deve existir na lista", () => {
    const task: ITask = {
      id: "2",
      name: "Estudar testes com Jest",
    };
    expect(tasks).toContainEqual(task);
  });
});
