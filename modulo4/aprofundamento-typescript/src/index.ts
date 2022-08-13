import { obterEstatisticas } from "./exercicio2";
import { buscarPostsPorAutor } from "./exercicio3";
import { ordenarConsultas } from "./exercicio5";

console.log(obterEstatisticas([5, 4, 8, 9, 13, 2, 6]));

console.log(
  buscarPostsPorAutor(
    [
      {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver",
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!",
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!",
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!",
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!",
      },
    ],
    "Lord Voldemort"
  )
);

console.log(
  ordenarConsultas([
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
  ])
);
