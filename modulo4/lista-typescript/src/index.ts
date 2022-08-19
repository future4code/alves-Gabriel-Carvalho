enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Pessoas = {
  nome: string;
  salário: number;
  setor: SETOR;
  presencial: boolean;
};
const arrayPessoas: Pessoas[] = [
  { nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETOR.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETOR.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETOR.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETOR.MARKETING, presencial: true },
];
type Users = {
  name: string;
  email: string;
  role: string;
};

const arrayUsuarios: Users[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

import { retornarString } from "./exercicio1";
import { retornaTipo } from "./exercicio2";
import { retornaFilmes } from "./exercicio3";
import { retornarPresencial } from "./exercicio4";
import { retornaUsers } from "./exercicio5";

console.log(retornarString("Gabriel", "16/01/1996"));

console.log(retornaTipo(13));

console.log(retornaFilmes("Duna", 2021, GENERO.ACAO, 74));

console.log(retornarPresencial(arrayPessoas));

console.log(retornaUsers(arrayUsuarios));
