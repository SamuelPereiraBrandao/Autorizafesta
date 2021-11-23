//receber uma quantidade de valores para avaliar 
// funcao exibe se cada valor [e par ou impar]
exibirtipo(50)
function exibirtipo(limite){
    for(let i = 0; i <= limite; i++){
        if( i % 2 === 0)
        console.log(i,'PAR')
        else
        console.log(i,'IMPAR')
    }
}