exibirasteristicos(235)
function exibirasteristicos(linhas){
    let padrao='';
    for(let linha=1; linha<=linhas;linha++){
        padrao += '*'
        console.log(linha + padrao);
    }
}