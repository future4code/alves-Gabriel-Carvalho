import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, CPF, birthDateString } = req.body;

    const [day, month, year] = birthDateString.split("/");

    const birthDate: Date = new Date(`${year}-${month}-${day}`);

    const age: number = Date.now() - birthDate.getTime();

    const ageInYears: number = age / 1000 / 60 / 60 / 24 / 365;

    if (ageInYears < 18) {
      res.statusCode = 406;
      throw new Error("Sua idade deve ser maior que 18 anos.");
    }
    accounts.push({
      name,
      CPF,
      birthDate,
      balance: 0,
      statement: [],
    });

    res.status(201).send("Conta criada com sucesso");
  } catch (error: any) {
    res.send({ message: error.message });
  }
});

app.get("/users", (req: Request, res: Response) => {
  try {
    if (!accounts.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta foi encontrada");
    }

    res.status(200).send(accounts);
  } catch (error: any) {
    res.send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
