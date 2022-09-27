export const checkAge = (ano: number): number => {
  const anoAtual = new Date().getFullYear();
  const age = anoAtual - ano;
  return age;
};
