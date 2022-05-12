// Exercícios de interpretação de código
// 1.
// function minhaFuncao(variavel) {
//   return variavel * 5;
// }

// console.log(minhaFuncao(2));
// console.log(minhaFuncao(10));
// a.
// 10
// 50
// b. não apareceria nada

// 2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);
// a. a função serve para deixar todos os caracteres do texto minúsculos
// b. i. eu gosto de cenoura true // ii. cenoura é bom pra vista true // iii. cenouras crescem na terra true

// Exercícios de escrita de código
// 1.
// function imprimirInfo() {
//   console.log(
//     "Eu sou Gabriel, tenho 23 anos, moro em Minas Gerais e sou estudante."
//   );
// }
// imprimirInfo();

// function imprimirInfo(nome, idade, endereco, prof) {
//   console.log(
//     `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${prof}`
//   );
// return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${prof}`;
// }
// imprimirInfo("Gabriel", 23, "Minas Gerais", "estudante");

// 2.
// a.
// function somar(num1, num2) {
//   let soma = num1 + num2;
//   console.log(soma);
// }
// somar(2, 3);

// b.
// function maiorMenor(num1, num2) {
//   let comparacao = num1 > num2;
//   console.log(comparacao);
// }
// maiorMenor(3, 2);

// c.
// function parOuNao(num1) {
//   let ifPar = num1 % 2 === 0;
//   console.log(ifPar);
// }
// parOuNao(2);

// d.
// function funcaoTamanhoMaiusculo(string) {
//   let maiusculo = string.toUpperCase();
//   let tamanho = string.length;
//   console.log(maiusculo, tamanho);
// }

// funcaoTamanhoMaiusculo("Gabriel");

// 3.
// function somar(num1, num2) {
//   let soma = num1 + num2;
//   console.log(soma);
// }

// somar(30, 3);

// function subtrair(num1, num2) {
//   let subtracao = num1 - num2;
//   console.log(subtracao);
// }

// subtrair(30, 3);

// function multiplicar(num1, num2) {
//   let multiplicacao = num1 * num2;
//   console.log(multiplicacao);
// }

// multiplicar(30, 3);

// function dividir(num1, num2) {
//   let divisao = num1 / num2;
//   console.log(divisao);
// }

// dividir(30, 3);

// Desafios
// 1. a.
// const arrowFunction = (nome) => console.log(nome);
// arrowFunction("Gabriel");

// b.
// let arrowFunction = (n1, n2) => (soma = n1 + n2);

// arrowFunction(1, 2);
// console.log(soma);

// 2.
// // com arrow function:
// let teoremaPitagoras = (b, c) => {
//   a = b * b + c * c;
//   raiz = Math.sqrt(a);
//   console.log(raiz);
// };

// teoremaPitagoras(3, 4);

// // com function:
// function teoremaPit(ca, co) {
//   hip = ca * ca + co * co;
//   raizz = Math.sqrt(hip);
//   console.log(raizz);
// }
// teoremaPit(3, 4);
