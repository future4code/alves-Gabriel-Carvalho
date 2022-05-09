/* Exercício 1.
const nome = "";
const idade = "";

console.log(typeof nome);
console.log(typeof idade); 
*/

/* primeiro, tentei sem o "=", deu erro por falta de declaração, depois tentei um parêntese vazio "()" e deu erro de sintaxe, por fim, tentei aspas vazias e foi retornado string, pois aspas é a forma de declarar uma variável do tipo string. */

// const nome = prompt("Digite seu nome");
// const idade = prompt("Digite sua idade");

// console.log(typeof nome, typeof idade);

// Ambas as variáveis continuam sendo strings

// const nome = prompt("Digite seu nome");
// const idade = prompt("Digite sua idade");
// console.log("Olá", nome, "você tem", idade, "anos.");

// Exercício 2.

/*let pergunta1 = prompt("Você está estudando?");
let pergunta2 = prompt("Hoje está calor?");
let pergunta3 = prompt("Você está com sede?");

console.log("Você está estudando?", pergunta1);
console.log("Hoje está calor?", pergunta2);
console.log("Você está com sede?", pergunta3);*/

// Exercício 3

/*
let a = 10;
let b = 25;
let x;

x = a;
a = b;
b = x;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
*/

// Desafio

let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));

soma = num1 + num2;
produto = num1 * num2;

console.log("O primeiro número somado ao segundo número resulta em:", soma);
console.log(
  "O primeiro número multiplicado pelo segundo número resulta em:",
  produto
);
