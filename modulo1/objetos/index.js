// Exercícios de interpretação de código
// 1.
// a.
// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo horário: 14h

// 2.
// a.
// nome: Juca
// idade: 3
// raca: SRD

// nome: Juba
// idade: 3
// raca: SRD

// nome: Jubo
// idade: 3
// raca: SRD

//b. os três pontos fazem uma cópia do objeto mencionando, assim, podemos alterar ou adicionar novas informações ao objeto.

// 3.
// a.
// false
// undefined

// b. dois parâmetros foram criados junto com a função, objeto e propriedade, depois foi retornado a propriedade dentro desse objeto. Quando a função é chamada ela "encontra a key backender, mas não encontra a key "altura".

// Exercícios de escrita de código

// 1.

// const user = {
//   name: "Givanildo",
//   nickNames: ["Hulk", " Máquina", " Artilheiro"],
// };

// function printNickName() {
//   const newUser = {
//     ...user,
//     newNickNames: ["Matador", " Galo doido", " Brabo"],
//   };
//   console.log(
//     `Eu sou ${user.name}, mas pode me chamar de: ${newUser.newNickNames}`
//   );
// }

// console.log(`Eu sou ${user.name}, mas pode me chamar de: ${user.nickNames}`);

// printNickName(user);

// 2.
// const pessoa = {
//   nome: "Gabriel",
//   idade: 23,
//   profissao: "Estudante",
// };

// function retornarEmArray() {
//   const arrayPessoa = [
//     pessoa.nome,
//     pessoa.nome.length,
//     pessoa.idade,
//     pessoa.profissao,
//     pessoa.profissao.length,
//   ];

//   console.log(arrayPessoa);
// }

// retornarEmArray(pessoa);

// 3.

// function receberFrutas() {
//   carrinho.push(banana);
//   carrinho.push(abacate);
//   carrinho.push(caju);
// }

// const banana = {
//   nome: "Banana",
//   disponibilidade: true,
// };

// const abacate = {
//   nome: "Abacate",
//   disponibilidade: true,
// };

// const caju = {
//   nome: "Caju",
//   disponibilidade: true,
// };

// const carrinho = [];
// receberFrutas(banana, abacate, caju);

// console.log(carrinho);

// Desafios
// 1.

// function userInfo() {
//   let userName = prompt("Digite seu nome");
//   let userAge = prompt("Digite sua idade");
//   let userProf = prompt("Digite sua profissão");

//   const userInfObj = {
//     nome: userName,
//     idade: userAge,
//     profissao: userProf,
//   };

//   console.log(userInfObj);
// }

// userInfo();

// 2.

// function receberFilmes() {
//   const filme1 = {
//     nome: "Inglourious Basterds",
//     ano: 2009,
//   };
//   const filme2 = {
//     nome: "Avatar",
//     ano: 2009,
//   };
//   const lancamentoAntes = filme1.ano > filme2.ano;
//   const lancamentoMesmoAno = filme1.ano === filme2.ano;

//   console.log(
//     `O primeiro filme foi lançado antes do segundo? ${lancamentoAntes}`
//   );
//   console.log(
//     `O primeiro filme foi lançado no mesmo ano do segundo? ${lancamentoMesmoAno}`
//   );
// }

// receberFilmes();

// 3.

function receberFrutas() {
  carrinho.push(banana);
  carrinho.push(abacate);
  carrinho.push(caju);
}

const banana = {
  nome: "Banana",
  disponibilidade: true,
};

const abacate = {
  nome: "Abacate",
  disponibilidade: true,
};

const caju = {
  nome: "Caju",
  disponibilidade: true,
};

const carrinho = [];
receberFrutas(banana, abacate, caju);

console.log(carrinho);

function verificarDisponibilidade() {
  banana.disponibilidade = !banana.disponibilidade;
}

verificarDisponibilidade(banana);
