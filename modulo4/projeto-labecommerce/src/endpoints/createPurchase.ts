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

export const getPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await connection("labecommerce_purchases")
      .select(
        "labecommerce_users.name",
        "labecommerce_products.name",
        "quantity",
        "total_price"
      )
      .join("labecommerce_users", "user_id", "labecommerce_users.id")
      .join("labecommerce_products", "product_id", "labecommerce_products.id")
      .where({
        user_id: req.params.user_id,
      });
    res.send(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).send("Um erro inesperado aconteceu");
  }
};
