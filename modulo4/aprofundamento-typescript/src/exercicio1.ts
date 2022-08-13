const minhaString: string = "Ola";
// o typescript avisa que não posso atribuir um número à uma variável do tipo string
const meuNumero: number = 13;
// o typescript avisa que não posso atribuir uma string à uma variável do tipo number

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

enum Cores {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

type pessoaCompleto = Pessoa & {
  corFavorita: Cores;
};

const pessoa1: pessoaCompleto = {
  nome: "Gabriel",
  idade: 26,
  corFavorita: Cores.LARANJA,
};
