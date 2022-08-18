import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type Tasks = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const arrayTasks: Tasks[] = [
  {
    userId: 1,
    id: 1,
    title: "comer",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "dormir",
    completed: true,
  },
  {
    userId: 2,
    id: 3,
    title: "tomar banho",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "lavar roupa",
    completed: true,
  },
];

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

app.get("/completo", (req: Request, res: Response) => {
  const completos = arrayTasks.filter((task) => {
    return task.completed === true;
  });
  const titulos = completos.map((task) => {
    return task.title;
  });
  res.send(titulos);
});

app.post("/criar", (req: Request, res: Response) => {
  const { userId, id, title, completed } = req.body;

  const newTask: Tasks = {
    userId: userId,
    id: id,
    title: title,
    completed: completed,
  };

  arrayTasks.push(newTask);
  res.send("Tarefa adicionada");
});

app.put("/edit/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  for (let task of arrayTasks) {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  }
  res.send(arrayTasks);
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
