const array = [70,90,90];
console.log(mediadoaluno(array));
function mediadoaluno(notas){
    const media = calcularmedia(notas);
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'c';
    if(media < 89) return console.log(media,' de media e por isso recebeu nota: B')
    return 'A'
}




function calcularmedia(array){
    let soma=0;
    for(let nota of array){
        soma +=  nota;

    }
    return media = soma/(array.length);
}
