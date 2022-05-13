// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alturaRet = prompt("Digite a altura");
  let larguraRet = prompt("Digite a largura");

  areaRet = alturaRet * larguraRet;
  console.log(areaRet);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual");
  const anoNascimento = prompt("Digite o ano de nascimento");

  let idade = anoAtual - anoNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const userName = prompt("Digite seu email");
  const userAge = prompt("Digite sua idade");
  const userMail = prompt("Digite seu e-mail");

  console.log(
    `Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userMail}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite a cor 1");
  const cor2 = prompt("Digite a cor 2");
  const cor3 = prompt("Digite a cor 3");

  arrayCor = [cor1, cor2, cor3];

  console.log(arrayCor);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.unshift(array[array.length - 1]);
  array.push(array[1]);
  array.splice(1, 1);
  array.splice(array.length - 2, 1);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (
    string1 === string2 ||
    string1.toUpperCase() === string2.toUpperCase() ||
    string1.toLowerCase() === string2.toLowerCase
  );
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual2 = prompt("Digite o ano atual");
  const anoNascimento2 = prompt("Digite o ano do seu nascimento");
  const anoEmissao = prompt("Digite o ano em que foi emitida");
  let idade = anoAtual2 - anoNascimento2;
  let renova =
    (idade <= 20 && anoAtual2 - anoEmissao >= 5) ||
    (idade > 20 && idade <= 50 && anoAtual2 - anoEmissao >= 10) ||
    (idade > 50 && anoAtual2 - anoEmissao >= 15);
  console.log(renova);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiplos400 = ano % 400 === 0;
  let multiplos4 = ano % 4 === 0;
  let multiplos100 = ano % 100 === 0;
  let condicoes = multiplos400 || (multiplos4 && !multiplos100) || multiplos400;

  return condicoes;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const tem18 = prompt("Você tem mais de 18 anos?");
  const possuiEM = prompt("Você possui ensino médio completo?");
  const dispo = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );

  const valida = tem18 === "sim" && possuiEM === "sim" && dispo === "sim";
  console.log(valida);
}
