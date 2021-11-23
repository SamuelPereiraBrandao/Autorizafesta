// multiplos de 3 = 3 6 9
// multiplos de 5 = 5 e 10
somar(10);
function somar(limite){
    let multiplosde3 = 0
    let multiplosde5= 0
    for(i =0; i<= limite;i++){
        if(i % 3 === 0)
        multiplosde3+= i;
        if(i % 5 === 0)
        multiplosde5+=i;
    }
    console.log(multiplosde3+multiplosde5)
}