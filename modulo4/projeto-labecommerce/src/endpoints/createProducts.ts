import connection from "../data/connection";
import { Request, Response } from "express";
import { Product } from "../types";

export const createProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await connection("labecommerce_products").insert({
      id: Date.now().toString(),
      name: req.body.name,
      price: req.body.price,
      image_url: req.body.image_url,
    });
    res.send("Produto criado com sucesso!");
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
