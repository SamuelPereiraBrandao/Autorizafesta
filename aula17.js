// divisivel por 3 = fizz
// divisivel por 5 = buzz
// divisivel por 3 e 5 fizzbuzz
//nao divisivel por 3 ou 5 = entrada
// nao eh um numero = nao eh um numero
const resultado = fizzbuzz(11);
console.log(resultado);

function fizzbuzz(entrada){
    if( typeof entrada !== 'number')
    return 'nao eh um numero'
    if(entrada % 3 === 0 && entrada % 5 === 0 )
    return 'fizzbuzz';
    if (entrada % 3 === 0)
    return 'Fizz'
    if(entrada % 5 === 0)
    return 'Buzz'

    return entrada;
}