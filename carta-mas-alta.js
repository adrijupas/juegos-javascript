var cartaMasAlta ={
    jugar: function(){
        //desarrollo del juego
        croupier.mezclar(baraja);
        //console.log(baraja);    
        croupier.repartirJugador();

        //Retardo de la animacion de las cartas
        setTimeout(
           function(){ 
                croupier.repartirCroupier();
           }  
            , 3000);

        setTimeout(
            function(){
                croupier.compararCartas();
            }
            ,3000);

        }
    }


//invocamos la funcion aquí, lo haremos con un boton u otro mecanismo
//jugar();
document.getElementById('cartaA').onclick = cartaMasAlta.jugar;






