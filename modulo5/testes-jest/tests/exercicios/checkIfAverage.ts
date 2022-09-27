export const checkIfAverage = (a: number[]): number => {
  let sum = 0;
  for (let n of a) {
    sum += n;
  }
  const average = sum / a.length;
  return Math.ceil(average);
};
