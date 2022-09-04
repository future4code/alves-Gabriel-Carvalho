import connection from "../data/connection";
import { Response, Request } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await connection("labecommerce_products").select("*");
    res.send(result);
  } catch (error: any) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
