export interface ITask {
  id: string;
  name: string;
}

export const tasks: ITask[] = [
  {
    id: "1",
    name: "Fazer almoço",
  },
  {
    id: "2",
    name: "Estudar testes com Jest",
  },
];
