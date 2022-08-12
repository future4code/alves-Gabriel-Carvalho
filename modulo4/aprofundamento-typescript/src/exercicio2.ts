//a)
// a entrada é um array de números
// as saídas são: o maior número, o menor número e a média de todos os números
export function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort((a: number, b: number) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//b) as variáveis soma e num, são do tipo number.

//c)
type Amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number) => {};
};
