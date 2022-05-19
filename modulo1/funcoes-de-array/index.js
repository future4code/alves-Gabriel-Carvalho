// Exercícios de interpretação de código
// 1.
// a. será impresso cada objeto, o seu index no array e um array com todos os objetos

// 2.
// a. será impresso um array com todos os nomes dos objetos dentro do primeiro array

// 3.
// a. serão impressos somente os objetos que não contém o apelido "Chijo"

// Exercícios de escrita de código

// 1.

// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// const arrayNomes = pets.map((elemento) => {
//   return elemento.nome;
// });
// console.log(arrayNomes);

// const arraySalsicha = pets.filter((elemento) => {
//   return elemento.raca === "Salsicha";
// });
// console.log(arraySalsicha);

// const arrayPoodle = pets.filter((elemento) => {
//   return elemento.raca === "Poodle";
// });

// const arrayNomes = arrayPoodle.map((elemento) => {
//   return elemento.nome;
// });
// console.log(
//   `Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayNomes[0]}`
// );
// console.log(
//   `Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayNomes[1]}`
// );

// 2.

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a.
// const arrayNomes = produtos.map((elemento) => {
//   return elemento.nome;
// });
// console.log(arrayNomes);

// b.

// const array = produtos.map((elemento) => {
//   const newObj = { nome: elemento.nome, preco: elemento.preco * 0.95 };
//   return newObj;
// });
// console.log(array);

// const arrayPreco = produtos.map((elemento) => {
//   return elemento.preco * 0.95;
// });

// const newObj = { nome: arrayNomes, preco: arrayPreco };
// console.log(newObj);

// c.
// const arrayBebidas = produtos.filter((elemento) => {
//   return elemento.categoria === "Bebidas";
// });
// console.log(arrayBebidas);

// d.
// const arrayYpe = produtos.filter((elemento) => {
//   return elemento.nome.includes("Ypê");
// });
// console.log(arrayYpe);

// e.
// const arrayYpe = produtos.filter((elemento) => {
//   return elemento.nome.includes("Ypê");
// });
// console.log(arrayYpe);

// const arrayCompre = arrayYpe.map((elemento) => {
//   return elemento.nome;
// });

// const arrayPor = arrayYpe.map((elemento) => {
//   return elemento.preco;
// });

// const imprimirComprePor = (compre, por) => {
//   console.log(`Compre ${compre} por R$:${por}`);
// };
// imprimirComprePor(arrayCompre[0], arrayPor[0]);
// imprimirComprePor(arrayCompre[1], arrayPor[1]);

// Desafio

// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ];

// a.

// const arrayNomesPoke = pokemons.map((elemento) => {
//   return elemento.nome;
// });

// console.log(arrayNomesPoke.sort());

// b.
// const tipoPoke = pokemons.map((elemento) => {
//   return elemento.tipo;
// });
// let newTipoPoke = [...new Set(tipoPoke)];
// console.log(newTipoPoke);
