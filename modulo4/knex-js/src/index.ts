import app from "./app";
import { Request, Response } from "express";
import knex from "knex";
import connection from "./connection";

// Exercício 3
// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const [result] = await connection.raw(`
//   SELECT * FROM Actor
//   WHERE id = '${req.params.id}'
//   `);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send("Um erro inesperado aconteceu");
//   }
// });

// app.get("/actor", async (req: Request, res: Response) => {
//   try {
//     const [result] = await connection.raw(`
//   SELECT COUNT(*) as count FROM Actor
//   WHERE gender = '${req.query.gender}'
//   `);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send("Um erro inesperado aconteceu");
//   }
// });

// Exercício 4
// app.put("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     await connection("Actor")
//       .update({
//         salary: req.body.salary,
//       })
//       .where({
//         id: req.params.id,
//       });
//     res.send("Salário atualizado");
//   } catch (error) {
//     res.status(500).send("Um erro inesperado aconteceu");
//   }
// });

// app.delete("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     await connection("Actor").delete().where({
//       id: req.params.id,
//     });
//     res.send("Ator deletado");
//   } catch (error) {
//     res.status(500).send("Um erro inesperado aconteceu");
//   }
// });

// Exercício 5

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await connection("Movies").insert({
      id: Date.now().toString(),
      title: req.body.title,
      sinopse: req.body.sinopse,
      release_date: req.body.release_date,
      rating: req.body.rating,
      playing_limit_date: req.body.playing_limit_date,
    });
    res.send("Filme criado com sucesso");
  } catch (error) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

// Exercício 6
app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const result = await connection("Movies").select("*").limit(15);
    res.send(result);
  } catch (error) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});

// Exercício 7
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const [result] = await connection.raw(`
   SELECT * FROM Movies
   WHERE title LIKE '%${req.query.title}%' OR sinopse LIKE '%${req.query.sinopse}%' 
   ORDER BY release_date ASC
   `);
    res.send(result);
  } catch (error) {
    res.status(500).send("Um erro inesperado aconteceu");
  }
});
