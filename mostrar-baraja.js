var mostrarBaraja = {

    mostrar: function(){
    //bucle sobre la baraja
    for(var i=0; i< baraja.length; i++){
        document.getElementById('mostrarBaraja').innerHTML+=  `<img class= 'cartalista' src='baraja-svg/${baraja[i].imagen}'>`;
          
        }
    
    }
}

//mostrarBaraja.mostrar();

document.getElementById('mostrarB').onclick = mostrarBaraja.mostrar;