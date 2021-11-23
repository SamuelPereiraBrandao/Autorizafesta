const celular ={
    marcacelular:'asus',
    tamanhotela: {
        vertical:155,
        horizontal:75
    },
    capacidadebateria:5000,
    ligar: function(){
        console.log('fazendo ligacao...')
    }
}
 // javascript factory functionms(funcao de fabrica)
 function criarcelular(marcacelular,tamanhotela,capacidadedebateria){
   return {
        marcacelular,
        tamanhotela,
        capacidadedebateria,
        ligar(){
            console.log('fazendo ligacao...')
        }
        
    }    
    
 }
const celular1=criarcelular('Zenfone',5.5,5000)

    console.log(celular1);
//2=====================================================
    function smartphone(Nome,Tamanho,Bateria){
        return {
        Nome,
        Tamanho,
        Bateria
    }
    }
    
    const celular2=smartphone('SAMSUNG',5.9,6500)
    console.log(celular2)
     //3===================================================
     function smartphone33(marcacelular,porte,idade,peso,cor){
        return {
         marcacelular,
         porte,
         idade,
         peso,
         cor
     }  
     }
    
     const celular3=smartphone33('MOTOROLAA','GRANDE','2 anos',150,'azul')
     console.log(celular3)
      //4======================================================
      function smartphone4(modelodele,mouse,teclado,remedio){
          return{
              modelodele,
              mouse,
              teclado,
              remedio
          }
      }
      const celular4=smartphone4('Samsungbaby','tecladuuu',15262,'sim')
      console.log(celular4)