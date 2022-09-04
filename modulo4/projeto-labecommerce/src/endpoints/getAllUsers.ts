import { Request, Response } from "express";
import { off } from "process";
import connection from "../data/connection";
import selectAllUsers from "./selectAllUsers";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name || "";
    const type = req.query.type || "";
    let sort = req.query.sort;
    let order = req.query.order as string;
    let page = Number(req.query.page);

    if (!(sort === "name" || sort === "type")) {
      sort = "email";
    }
    if (
      !order ||
      !(order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC")
    ) {
      order = "DESC";
    }

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    const size = 5;
    const offset = size * (page - 1);
    const users = await connection("aula49_exercicio")
      .where("name", "like", `%${name}%`)
      .andWhere("type", "like", `%${type}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
