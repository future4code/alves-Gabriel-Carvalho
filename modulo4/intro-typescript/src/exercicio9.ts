export function checaValidadeInscricaoLabenu(tem18:boolean, possuiEM:boolean, disponibilidade:boolean):string {

  if(tem18 && possuiEM && disponibilidade === true){
    return "Você pode fazer o curso"
  }
  else{
    return "Você não pode fazer o curso"
  }


  
  
  
}