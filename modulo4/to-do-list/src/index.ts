import app from "./app";
import { Request, Response } from "express";
import knex from "knex";
import connection from "./connection";

app.post("/user", async (req: Request, res: Response) => {
  try {
    await connection("User").insert({
      id: Date.now().toString(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    });
    res.send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const result = await connection("User").select("id", "nickname");
    res.send(result);
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("User").select("*").where({
      id: req.params.id,
    });
    res.send(result);
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.put("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    await connection("User")
      .update({
        name: req.body.name,
        nickname: req.body.nickname,
      })
      .where({
        id: req.params.id,
      });
    if (!req.body.name || !req.body.nickname) {
      errorCode = 400;
      throw new Error("Os campos name e nickname não podem estar em branco");
    }
    res.send("Usuário atualizado!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/task", async (req: Request, res: Response) => {
  try {
    const date = req.body.limitDate.split("/").reverse().join("-");
    await connection("Task").insert({
      taskId: Date.now().toString(),
      title: req.body.title,
      description: req.body.description,
      limitDate: date,
      creatorUserId: req.body.creatorUserId,
    });

    res.send("Tarefa criada com sucesso!");
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("Task")
      .select(
        "Task.taskId",
        "Task.title",
        "Task.description",
        "Task.limitDate",
        "Task.status",
        "Task.creatorUserId",
        "User.name as creatorUserNickname"
      )
      .join("User", "User.id", "Task.creatorUserId")
      .where({
        taskId: req.params.id,
      });
    res.send(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.get("/task", async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const result = await connection("Task")
      .select(
        "Task.taskId",
        "Task.title",
        "Task.description",
        "Task.limitDate",
        "Task.status",
        "Task.creatorUserId",
        "User.name as creatorUserNickname"
      )
      .join("User", "User.id", "Task.creatorUserId")
      .where({
        creatorUserId: req.query.creatorUserId,
      });
    if (!req.query.creatorUserId) {
      errorCode = 400;
      throw new Error("Insira o id do criador da tarefa");
    }

    res.send(result);
  } catch (error: any) {
    console.log(error);
    res.status(errorCode).send("Um erro inesperado aconteceu");
  }
});

app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    await connection("Responsible").insert({
      task_id: req.body.task_id,
      responsible_user_id: req.body.responsible_user_id,
    });
    res.send("Tarefa atribuída com sucesso!");
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  try {
    const result = await connection("Responsible")
      .select("User.id", "User.nickname")
      .where({
        taskId: req.params.id,
      })
      .join("Task", "task_id", "Task.taskId")
      .join("User", "responsible_user_id", "User.id");
    res.send(result);
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});
