const filme = {
    titulo: 'vingadores',
    ano:2018,
    diretor:'robinnn',
    personagem:'thor'
}

exibirpropriedades(filme);
function exibirpropriedades(obj){
    for(prop in obj)
    if(typeof obj[prop] === 'string')
    console.log(prop,obj[prop])

}