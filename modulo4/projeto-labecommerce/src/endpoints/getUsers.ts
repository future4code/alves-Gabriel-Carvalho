import connection from "../data/connection";
import { Response, Request } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await connection("labecommerce_users").select("*");
    res.send(result);
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
