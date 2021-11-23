// criar função que mostrar os numeros primos
//primos
//compostos
//ex: 10,11
//10(1 ou por ele mesmo)
//10(1,1,4,6,10)
//11 - 1,11
exibirnumerosprimos(40);
function exibirnumerosprimos(limite){
    for(let numero=2; numero<= limite; numero++){

        if(numeroprimo(numero)) console.log(numero);
    }
}



function numeroprimo(numero){
let ehprimo=true;

for(let divisor = 2; divisor < numero; divisor++)
if(numero % divisor === 0){
    return false;
    
}
return true;
}
