//Operador Logico e (&&)
//retorna true se os dois operandos forem true
//console.log(true && true)

//console.log(false && true)

let maiordeidade= true;
let possuicarteiradetrabalho = true;
let podeaplicar = maiordeidade && possuicarteiradetrabalho;
console.log(podeaplicar)




let maiordeidade1= false;
let possuicarteiradetrabalho1 = true;
let podeaplicar1 = maiordeidade1 || possuicarteiradetrabalho1;
console.log('pode aplicar: ',podeaplicar1)


let candidatorecusado= !podeaplicar1;
console.log(`candidato recusado ${candidatorecusado}`);
 
