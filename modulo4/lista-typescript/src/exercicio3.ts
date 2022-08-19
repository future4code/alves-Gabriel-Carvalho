enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

export function retornaFilmes(
  nome: string,
  ano: number,
  gen: GENERO,
  pontuacao?: number
) {
  const Filmes = {
    nome: nome,
    ano: ano,
    genero: gen,
    pontuacao: pontuacao,
  };
  return Filmes;
}
