```js
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valor = 0;
  let preco = 0;
  if (quantidade < 12) {
    valor = 1.3;
  } else {
    valor = 1;
  }
  preco = valor * quantidade;
  return preco;
}
```
