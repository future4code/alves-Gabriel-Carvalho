// Exercícios de interpretação de código
// 1.
// let array;
// console.log("a. ", array);
// a. undefined

// array = null;
// console.log("b. ", array);
// b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log("c. ", array.length);
//c. 11

// let i = 0;
// console.log("d. ", array[i]);
//d. 3

// array[i + 1] = 19;
// console.log("e. ", array);
// //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i + 6];
// console.log("f. ", valor);
// e. 9

// 2.
// const frase = prompt("Digite uma frase");

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// SUBI NUM ONIBUS EM MIRROCOS 27

// Exercícios de escrita de código
// 1.
// const userName = prompt("Digite seu nome");
// const userMail = prompt("Digite seu e-mail");
// console.log(
//   `O email ${userMail} foi cadastrado com sucesso. Seja vem vinda(o) ${userName}`
// );

// 2.
// let arrayComidas = ["Pizza", "Sushi", "Lasanha", "Couve", "Batata"];

// console.log(arrayComidas);

// console.log(
//   `Essas são as minhas comidas preferidas:\n ${arrayComidas[0]}\n ${arrayComidas[1]}\n ${arrayComidas[2]}\n ${arrayComidas[3]}\n ${arrayComidas[4]}`
// );

// let comidaUsuario = prompt("Qual é a sua comida preferida?");

// let novoArray = ["Pizza", comidaUsuario, "Lasanha", "Couve", "Batata"];
// console.log(
//   `Essas são as minhas comidas preferidas:\n ${novoArray[0]}\n ${novoArray[1]}\n ${novoArray[2]}\n ${novoArray[3]}\n ${novoArray[4]}`
// );

// 3.
// let listaDeTarefas = [];

// let tarefaUm = prompt("Tarefa 1: ");
// let tarefaDois = prompt("Tarefa 2: ");
// let tarefaTres = prompt("Tarefa 3: ");

// listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres);
// console.log(listaDeTarefas);

// let indice = Number(
//   prompt("Digite o índice de uma tarefa que você já realizou")
// );

// listaDeTarefas.splice(indice, 1);
// console.log(listaDeTarefas);

// Desafios
// 1.
// let frase = prompt("Frase:");
// let arrayFrase = frase.split(" ", 99999999);
// console.log(arrayFrase);

// 2.

// let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

// console.log(arrayFrutas.length);
// console.log(arrayFrutas.length - 3);
