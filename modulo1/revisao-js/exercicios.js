// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}
console.log(array.length);

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}
console.log(array.reverse());
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}
console.log(array);

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((a) => a % 2 === 0);
}
console.log(array);

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  array.filter((a) => a % 2 === 0);
  array.map((a) => a ** 2);
}
// array.map((a) => a ** 2);

console.log(array);

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}
console.log(array);

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0;
  let menorNumero = 0;
  let divisivel = false;
  if (num1 > num2) {
    maiorNumero = num1;
  } else {
    maiorNumero = num2;
  }
  if (num1 < num2) {
    menorNumero = num1;
  } else {
    menorNumero = num2;
  }
  if (maiorNumero % menorNumero === 0) {
    divisivel = true;
  } else {
    divisivel = false;
  }
  let diferenca = maiorNumero - menorNumero;
  let newObj = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca,
  };
  return newObj;
}
console.log(newObj);
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numPares = [];
  for (let i = 0; numPares.length < n; i++) {
    if (i % 2 == 0) {
      numPares.push(i);
    }
  }
  return numPares;
}
console.log(numPares);

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipo = "";
  if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    tipo = "Escaleno";
  } else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    tipo = "Equilátero";
  } else {
    tipo = "Isósceles";
  }
  return tipo;
}
console.log(tipo);

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
