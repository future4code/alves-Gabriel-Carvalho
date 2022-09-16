import connection from "../data/connection";
import { Request, Response } from "express";
import { User } from "../types";

export const createUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await connection("labecommerce_users").insert({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send("Usuário criado com sucesso!");
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
