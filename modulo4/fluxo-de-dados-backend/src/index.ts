import express, { Request, response, Response } from "express";
import cors from "cors";
import { produtos, Produto } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/produtos", (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;
    if (!name || !price) {
      res.statusCode = 400;
      throw new Error("O nome e o preço são obrigatórios");
    }
    if (typeof name !== "string") {
      res.statusCode = 400;
      throw new Error("O tipo do nome deve ser string");
    }
    if (typeof price !== "number") {
      res.statusCode = 400;
      throw new Error("O tipo do preço deve ser number");
    }
    if (price <= 0) {
      res.statusCode = 400;
      throw new Error("O preço deve ter um valor maior que 0");
    }

    const newProduct: Produto = {
      id: String(Date.now()),
      name: "celular",
      price: 1000,
    };
    produtos.push(newProduct);
    res.send(produtos);
  } catch (error: any) {
    res.status(response.statusCode).send({ message: error.message });
  }
});

app.get("/produtos", (req: Request, res: Response) => {
  const newArray = produtos.map((produto) => {
    return produto.name;
  });
  res.send(newArray);
});

app.put("/produtos/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const price = req.body.price;

    if (!id) {
      res.statusCode = 404;
      throw new Error("Produto não encontrado");
    }
    if (!price) {
      res.statusCode = 400;
      throw new Error("Preço deve ser inserido");
    }

    if (typeof price !== "number") {
      res.statusCode = 400;
      throw new Error("O tipo do preço deve ser number");
    }
    if (price <= 0) {
      res.statusCode = 400;
      throw new Error("O preço deve ter um valor maior que 0");
    }

    for (let produto of produtos) {
      if (produto.id === id) {
        produto.price = price;
      }
    }
    if (produtos.length) {
      res.statusCode = 404;
      throw new Error("Produto não encontrado");
    }
    res.send(produtos);
  } catch (error: any) {
    res.status(response.statusCode).send({ message: error.message });
  }
});

app.delete("/produtos/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.statusCode = 404;
      throw new Error("Id não encontrada");
    }

    const deleteProduto: Produto[] = produtos.filter((produto) => {
      return produto.id !== id;
    });

    if (deleteProduto.length) {
      res.statusCode = 404;
      throw new Error("Produto não encontrado");
    }
    res.send(deleteProduto);
  } catch (error: any) {
    res.status(response.statusCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
