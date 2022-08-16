export function retornarString(nome: string, data: string): string {
  return `Olá me chamo ${nome}, nasci no dia ${data.substr(
    0,
    2
  )} do mês ${data.substr(3, 2)} do ano de ${data.substr(6, 4)}`;
}
