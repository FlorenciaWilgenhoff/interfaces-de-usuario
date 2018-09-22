     let canvas = document.getElementById("canvas");
     let ctx = canvas.getContext("2d");    

var MAXFIL=6;
var MAXCOL=7;
 let drawTablero = new Array(MAXCOL); 
 for(let i=0;i<MAXFIL;i++){
 	drawTablero[i] = new Array(MAXCOL);
 }

 let drawFichasJugadorUno = []; 
 let drawFichasJugadorDos = []; 

  let JugadorUno = new Jugador('red', drawFichasJugadorUno, "1");
   let JugadorDos = new Jugador('yellow', drawFichasJugadorDos, "2");

 let imagen = new Image();
 imagen.src ="images/4.png";
 imagen.onload = function(){

  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));
  drawFichasJugadorUno.push(new Ficha (50, 50, 45, imagen, "red", drawFichasJugadorUno));

  

  for (var i = 0; i < drawFichasJugadorUno.length; i++) { 
    drawFichasJugadorUno[i].draw();  
}
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));
  drawFichasJugadorDos.push(new Ficha (170, 50, 45, imagen, "yellow", drawFichasJugadorDos));

 for (var i = 0; i < drawFichasJugadorDos.length; i++) { 
    drawFichasJugadorDos[i].draw();  
}
}



  let image = new Image();
        image.src ="images/fondo1.jpg";
        image.onload = function(){


  drawTablero.push(new Casillero (50, 270, 45, this ));
   drawTablero.push(new Casillero (50, 160, 45, this));
  drawTablero.push(new Casillero (170, 160, 45, this));
  drawTablero.push(new Casillero(290, 160, 45, this));
  drawTablero.push(new Casillero(410, 160, 45, this));
  drawTablero.push(new Casillero(530, 160, 45, this));
  drawTablero.push(new Casillero(650, 160, 45, this));




  drawTablero.push(new Casillero (170, 270, 45, this));
  drawTablero.push(new Casillero(290, 270, 45, this));
  drawTablero.push(new Casillero(410, 270, 45, this));
  drawTablero.push(new Casillero(530, 270, 45, this));
  drawTablero.push(new Casillero(650, 270, 45, this));


   drawTablero.push(new Casillero (50, 380, 45, this));
  drawTablero.push(new Casillero (170, 380, 45,this));
  drawTablero.push(new Casillero(290, 380, 45, this));
  drawTablero.push(new Casillero(410, 380, 45, this));
  drawTablero.push(new Casillero(530, 380, 45, this));
  drawTablero.push(new Casillero(650, 380, 45, this));

   drawTablero.push(new Casillero (50, 490, 45, this));
  drawTablero.push(new Casillero (170, 490, 45, this));
  drawTablero.push(new Casillero(290, 490, 45, this));
  drawTablero.push(new Casillero(410, 490, 45, this));
  drawTablero.push(new Casillero(530, 490, 45, this));
  drawTablero.push(new Casillero(650, 490, 45, this));

   drawTablero.push(new Casillero (50, 600, 45, this));
  drawTablero.push(new Casillero (170, 600, 45, this));
  drawTablero.push(new Casillero(290, 600, 45, this));
  drawTablero.push(new Casillero(410, 600, 45, this));
  drawTablero.push(new Casillero(530, 600, 45, this));
  drawTablero.push(new Casillero(650, 600, 45, this));

   drawTablero.push(new Casillero (50, 710, 45, this));
  drawTablero.push(new Casillero (170, 710, 45, this));
  drawTablero.push(new Casillero(290, 710, 45,this));
  drawTablero.push(new Casillero(410, 710, 45, this));
  drawTablero.push(new Casillero(530, 710, 45, this));
  drawTablero.push(new Casillero(650, 710, 45, this));

   drawTablero.push(new Casillero (50, 820, 45, this));
  drawTablero.push(new Casillero (170, 820, 45, this));
  drawTablero.push(new Casillero(290, 820, 45, this));
  drawTablero.push(new Casillero(410, 820, 45, this));
  drawTablero.push(new Casillero(530, 820, 45, this));
  drawTablero.push(new Casillero(650, 820, 45, this ));



  for (let i = 0; i < MAXFIL; i++) {
  	for (let j = 0; j < MAXCOL; j++) {
	drawTablero[i][j].draw();
  	}
	}

}


	function newCanvas(){
	 ctx.fillStyle = "blue";
	 ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		for (let i = 0; i < drawTablero.length; i++) { 
	    for (let j = 0; j < drawTablero.length; j++) {
	    drawTablero[i][j].draw();  
		}
		}
		for (var i = 0; i < drawFichasJugador.length; i++) { 
    drawFichasJugador[i][j].draw();  
		}
	}
