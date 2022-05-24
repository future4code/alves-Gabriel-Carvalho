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
  let novoArray = [];

  novoArray = array.filter((a) => a % 2 === 0);

  novoArray2 = novoArray.map((a) => a ** 2);

  return novoArray2;
}

console.log(novoArray2);

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
newArray = [];
function retornaSegundoMaiorESegundoMenor(array) {
  let maior = 0;
  let menor = 0;
  let segMaior = 0;
  let segMenor = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
      newArray.push(maior);
    }
    // else if (array[i])
    return newArray;
  }
}
console.log(newArray);
// && array[i] < segMaior

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  newObj = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return newObj;
}
console.log(newObj);

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  for (let i = 0; i < pessoas.length; i++)
    if (
      pessoas[i].altura >= 1.5 &&
      pessoas[i].idade > 14 &&
      pessoas[i].idade < 60
    ) {
      pessoasAutorizadas.push(pessoas[i]);
    }
  return pessoasAutorizadas;
}
console.log(pessoasAutorizadas);

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  let pessoasNaoAutorizadas = [];
  for (let i = 0; i < pessoas.length; i++)
    if (
      pessoas[i].altura >= 1.5 &&
      pessoas[i].idade > 14 &&
      pessoas[i].idade < 60
    ) {
      pessoasAutorizadas.push(pessoas[i]);
    } else {
      pessoasNaoAutorizadas.push(pessoas[i]);
    }
  return pessoasNaoAutorizadas;
}
console.log(pessoasNaoAutorizadas);

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  soma = 0;
  for (let i = 0; i < contas.length; i++) {
    soma += contas[i].compras;
    contas[i].saldoTotal = contas[i].saldoTotal - soma;
    contas[i].compras = [];
  }
  return contas;
}
console.log(contas);

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (a, b) {
    return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
  });
  return consultas;
}
console.log(consultas);

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
