import { Request, Response } from "express";
import { getAdressInfo } from "../services/getAdressInfo";
import { connection } from "../data/connection";
import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, cep } = req.body;

    if (!name || !nickname || !email || !cep) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'address' são obrigatórios";
    }

    const id: string = Date.now().toString();

    const address: string = await getAdressInfo(cep);

    const newUser: user = { id, name, nickname, email, address };

    await connection("Address").insert(newUser);

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
