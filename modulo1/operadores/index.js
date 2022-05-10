// Exercícios de interptretação de código

// 1.
// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2;

// let resultado = bool1 && bool2;
// console.log("a. ", resultado);

// resultado = bool1 && bool2 && bool3;
// console.log("b. ", resultado);

// resultado = !resultado && (bool1 || bool2);
// console.log("c. ", resultado);

// console.log("d. ", typeof resultado);

// a. false
// b. false
// c. true
// d. boolean

// 2.
// let primeiroNumero = prompt("Digite um numero!");
// let segundoNumero = prompt("Digite outro numero!");

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

// A entradas dos números estão em strings, ou seja, o código está concatenando caracteres numéricos.

// 3.
// O correto seria transformar as entradas em Number:

// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

// Exercícios de escrita de código

// 1.
// const idade = Number(prompt("Qual é a sua idade?"));
// const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"));

// comparacao = idade > idadeAmigo;
// console.log(comparacao);
// console.log(idade - idadeAmigo);

// 2.
// let numero = Number(prompt("Insira um número par"));
// console.log(numero % 2);

// Inserindo números pares, o resto da divisão é 0.
// Inserindo números ímpares, o resto da divisão é 1.

// 3.
// let idade = Number(prompt("Qual é a sua idade?"));
// let idadeMeses = idade * 12;
// let idadeDias = idade * 365;
// let idadeHoras = idade * 365 * 24;
// console.log("Sua idade em meses é", idadeMeses);
// console.log("Sua idade em dias é", idadeDias);
// console.log("Sua idade em horas é", idadeHoras);

// 4.
// let num1 = Number(prompt("Insira o primeiro número"));
// let num2 = Number(prompt("Insira o segundo número"));

// let maior = num1 > num2;
// let igual = num1 === num2;
// let primeiroDiv = num1 % num2 === 0;
// let segundoDiv = num2 % num1 === 0;

// console.log("O primeiro numero é maior que segundo?", maior);
// console.log("O primeiro numero é igual ao segundo?", igual);
// console.log("O primeiro numero é divisível pelo segundo?", primeiroDiv);
// console.log("O segundo numero é divisível pelo primeiro?", segundoDiv);

// Desafios

// 1.

// let letraAFahrenheit = 77;
// let letraAKelvin = (letraAFahrenheit - 32) * (5 / 9) + 273.15;
// console.log(letraAKelvin + "K");

// let letraBCelsius = 80;
// let letraBFahrenheit = letraBCelsius * (9 / 5) + 32;
// console.log(letraBFahrenheit + "ºF");

// let letraCCelsius = 30;
// let letraCFahrenheit = letraCCelsius * (9 / 5) + 32;
// let letraCKelvin = letraCCelsius + 273.15;
// console.log(letraCFahrenheit + "ºF");
// console.log(letraCKelvin + "K");

// let letraDCelsius = Number(prompt("Insira a temperatura em Celius"));
// let letraDFahrenheit = letraDCelsius * (9 / 5) + 32;
// let letraDKelvin = letraDCelsius + 273.15;
// console.log(letraDFahrenheit + "ºF");
// console.log(letraDKelvin + "K");

// 2.
// let valor = 280 * 0.05;
// console.log("R$" + valor);

// let valorDesconto = valor - valor * 0.15;
// console.log("R$" + valorDesconto);

// 3.

let lbA = 20;
let kgA = lbA / 2.2046;
console.log(lbA + "lb equivalem a " + kgA + "kg");

let ozB = 10.5;
let kgB = ozB / 35.274;
console.log(ozB + "oz equivalem a " + kgB + "kg");
