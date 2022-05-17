// Exercícios de interpretação de código
// 1.
// a. o código verifica se o número é par
// b. para os números aos quais o resto da divisão por 2 é 0, ou seja, os pares
// c. para os números aos quais o resto da divisão por 2 não é 0, ou seja, os ímpares

// 2.
// a. o código serve para mostrar o preço de cada fruta.
// b. O preço da fruta Maçã R$ é 2.25
// c. O preço da fruta Pêra é R$ 5.5
//    O preço da fruta Pêra é R$ 5

// 3.
// a. A primeira linha está pedindo um número e guardando ele na variável (número)
// b. Número 10: esse número passou no teste. Número -10: erro
// c. haverá um erro, pois falta o else, que seria para considerar qualquer número que não é maior que 0.

// Exercícios de escrita de código

// 1.

// const idade = Number(prompt("Digite sua idade"));

// if (idade >= 18) {
//   console.log("Você pode dirigir");
// } else {
//   console.log("Você não pode dirigir");
// }

// 2.

// const turno = prompt("Digite seu turno");

// if (turno === "M") {
//   console.log("Bom Dia");
// } else if (turno === "V") {
//   console.log("Boa Tarde");
// } else if (turno === "N") {
//   console.log("Boa Noite");
// }

// 3.

// const turno2 = prompt("Digite seu turno");

// switch (turno2) {
//   case "M":
//     console.log("Bom Dia");
//     break;
//   case "V":
//     console.log("Boa Tarde");
//     break;
//   case "N":
//     console.log("Boa Noite");
//     break;
//   default:
//     console.log("Turno inválido");
// }

// 4.

// const genero = prompt("Digite o gênero do filme");
// const valorIngresso = Number(prompt("Digite o valor do ingresso"));

// if (genero === "fantasia" && valorIngresso < 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// }

// Desafios

// 1.
// const genero = prompt("Digite o gênero do filme");
// const valorIngresso = Number(prompt("Digite o valor do ingresso"));
// const lanche = prompt("Qual lanche você irá comprar?");

// if (genero === "fantasia" && valorIngresso < 15) {
//   console.log("Bom filme!");
//   console.log(`Aproveite o seu/sua ${lanche}`);
// } else {
//   console.log("Escolha outro filme :(");
// }

let nome = prompt("Seu nome completo");
let tipoJogo = prompt("Tipo de jogo");
let etapaJogo = prompt("Etapa do jogo");
let categoria = Number(prompt("Categoria"));
let qtd = prompt("Quantidade de ingressos");

if (etapaJogo === "SF") {
  if (categoria === 1) {
    console.log(
      `---Dados da compra---\n Nome do cliente: ${nome}\n Tipo de jogo: Nacional\nEtapa do jogo: Semifinal\nCategoria ${categoria}\nQuandidade de Ingressos: ${qtd}\n---Valores---\nValor do ingresso: R$${1320}\n Valor total: R$${
        1320 * qtd
      }`
    );
  }
}

// console.log(
//   `---Dados da compra---\n Nome do cliente: ${nome}\n Tipo de jogo:${tipoJogo}\nEtapa do jogo: ${etapaJogo}`
// );

// console.log(valorIngresso);
