const celular = {
    marcacelular :'asus',
    tamanhotela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log('fazendo ligacao')
    }
}
//1================================================
const novoobjeto = Object.assign(celular,{
    bateria:5000
})
console.log(novoobjeto)
//2=====================================
const objeto2 = {...celular,
Bateria: 50009 }
console.log(objeto2)
// objeto 3
function objeto3(tamanho,peso,cor,medidas){
    return{
        tamanho,
        peso,
        cor,
        medidas
    }

}
const objeto33=objeto3('350cm','450g','azul','alto e largo')
//clonando objeto1
const cloneob3 = Object.assign(objeto33,{
    Serio:'sim'
})
console.log(cloneob3)

//clonando objeto2
const ob3={...objeto33, Serio:'simm'}
console.log(ob3)
//clonando 3 
const clone3={...objeto33, adicionarqualquercoisa:'sim'}
console.log(clone3)
//clonando4
const clone4= Object.assign(objeto33,{qualquercoissaaas:'nao}'})
console.log(clone4)
//clonando5
const clone5 = {...objeto33,possoadiconaragr:'podesimmano'}
console.log(clone5)