const resultado=fizzbuzz(15);
console.log(resultado);
 function fizzbuzz(entrada){
     if( typeof entrada !== 'number')
     return 'nao eh um numero'
     if(entrada % 3 === 0 && entrada % 5 === 0)
     return'fizzbuzz'
     if(entrada % 3 === 0)
     return 'fizz'
     if(entrada % 5 === 0)
     return 'buzz'
     return entrada;
 }