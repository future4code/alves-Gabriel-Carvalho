function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numero = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (numeroEscolhido === arrayDeNumeros[i]) {
      numero++;
      imprimir = `O número ${numeroEscolhido} aparece ${numero}x`;
    } else if (numero === 0) {
      imprimir = "Número não encontrado";
    }
  }
  return imprimir;
}
