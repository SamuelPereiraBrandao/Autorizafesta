 
     //constructor factory

  function celular(marcacelular,tamanhotela,capacidadedebateria){
      this.marcacelular=marcacelular,
      this.tamanhotela=tamanhotela
      this.capacidadedebateria=capacidadedebateria,
      this.ligar = function(){
        console.log('fazendo ligacao...')
      }
  }
  const celular2323=new celular('ASUS',5.5,5000)
  console.log(celular2323)

  function capa(modelo,tamanho,cor,espessura){
      this.modelo=modelo,
      this.tamanho=tamanho,
      this.cor=cor,
      this.espessura=espessura
  }
  const resultado= new capa('caderno expresso',15,'azul','2.22mm')
  console.log(resultado)