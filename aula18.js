// velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto na carteira
//math.floor()
// caso os pontos sejam maior que 12 -> carteira suspendida
verificarvelocidade(85);

function verificarvelocidade(velocidade){
    const velocidademaxima =70
    const kmporponto = 5
    
    if(velocidade <= velocidademaxima)
    console.log('tudo ok')
    
    else{
        const max= (velocidade-70)
        const pontos= Math.floor((velocidade - velocidademaxima)/kmporponto)
        if(pontos >= 12)
        console.log('carteira suspensa')
        else
        console.log('voce esta a:',velocidade,' km/h e tambem esta:',max,'km/h acima do permitido(70km/h) e por isso foram aplicados: ',pontos,' pontos na carteira')
    }
}