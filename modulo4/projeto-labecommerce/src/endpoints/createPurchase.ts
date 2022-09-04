import connection from "../data/connection";
import { Request, Response } from "express";

export const createPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await connection("labecommerce_purchases").insert({
      id: Date.now().toString(),
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      total_price: req.body.total_price,
    });
    res.send("Compra registrada com sucesso!");
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
