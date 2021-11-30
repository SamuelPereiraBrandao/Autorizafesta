function verificarentrada(){
    Nomeconvidado = document.getElementById('nome').value
    convidadoPor2= document.getElementById('convidadoPor').value
    convidadoscristian = ['Samuel','Thiago','Amanda','Beatriz','Joao']
    if(convidadoscristian.includes(Nomeconvidado) && convidadoPor2 === 'Cristian'){ //Só poderam entrar caso forem aceitos pela lista de chamada e autorizado por quem chamou
        document.getElementById('permissaodeentrada').innerText=`🎉😀 Você tem a autorização do responsável e por isso poderá entrar!
         SUA SENHA PARA ENTRAR NA FESTA É: 15213621 😀 🎉`
        
    }else{
        document.getElementById('permissaodeentrada').innerText='😔 Você não tem autorização e por isso não poderá entrar! 😔'
    }
}
document.getElementById('permissaodeentrada').innerText=String.fromCodePoint(X1F600)