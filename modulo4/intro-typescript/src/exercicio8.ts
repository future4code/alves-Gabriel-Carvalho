export function reverterString(texto:string):string {
  let newTexto:string = '';
  for (var i = texto.length - 1; i >= 0; i--)
    newTexto += texto[i];
  return newTexto;
}