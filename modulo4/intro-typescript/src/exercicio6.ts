export function operacoesNumeros(num1:number, num2:number):number[]{
  let soma: number = num1+num2
  let sub: number = num1-num2
  let mult: number = num1*num2
  let div: number = num1/num2
  let res: number[] = [soma, sub, mult, div]

  return res

}