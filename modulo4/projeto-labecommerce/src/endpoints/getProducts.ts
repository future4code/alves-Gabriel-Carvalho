import connection from "../data/connection";
import { Response, Request } from "express";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name || "";
    let sort = req.query.sort;
    let order = req.query.order as string;

    if (!(sort === "name")) {
      sort = "name";
    }
    if (
      !order ||
      !(order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC")
    ) {
      order = "ASC";
    }

    const products = await connection("labecommerce_products")
      .where("name", "like", `%${name}%`)
      .orderBy(sort, order);

    if (!products.length) {
      res.statusCode = 404;
      throw new Error("Nenhum produto encontrado");
    }

    res.send(products);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
