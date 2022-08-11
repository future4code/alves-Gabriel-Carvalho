export function funcaoDna(dna:string):string{

  const converter = dna.replace("A","U").replace("T","A").replace("C","G").replace("G","C")

  return converter

}