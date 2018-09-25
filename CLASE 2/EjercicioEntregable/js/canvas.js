     let canvas = document.getElementById("canvas");
     let ctx = canvas.getContext("2d");    

//QUE SOLO MUEVA UNA FICHA
//QUE ANDE LO DE LOS TURNOS(desactivar fichas oponente);
//-- cuando juega el otro deberia borrar los eventos mios
//como hacer que vuelva activar las fichas?


const MAXFIL=7;
const MAXCOL=8;
const MAX=43;
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
   for (var i = 0; i < MAX; i++) { 
  	drawFichasJugadorUno.push(new Ficha (40, 40, 36, imagen, "red", drawFichasJugadorUno));
 
}

 for (var j = 0; j < MAX; j++) { 
 	drawFichasJugadorDos.push(new Ficha (150, 40, 36, imagen, "yellow", drawFichasJugadorDos));
  
}

 imagen.onload = function(){
for (var i = 0; i < MAX; i++) { 
	drawFichasJugadorUno[i].draw();  
}


for (var j = 0; j <MAX; j++) { 
 drawFichasJugadorDos[j].draw();  
}

}

 let fichaCont = 0;

  let image = new Image();
        image.src ="images/fondo1.jpg";
        let color ="black";
        let x=35; //se repite 7 veces
let y=35; //se repite 6
let radio=32;
for (var i = 0; i < MAXFIL; i++) { 
 
y=y+90;
for (var j = 0; j < MAXCOL; j++) { 
 	drawTablero[i][j]=(new Casillero (x, y, radio, image, color));
 	 x=x+105;
 	 switch (x) {
 	  case x==35:
	  x=135;
	  case x==135:
	  x=255;
	  case x==255:
	  x=375
	   case x==375:
	  x=495
	   case x==495:
	  x=635
	  case x==635:
	  x=735
	  }
if(x>735){
	x=35;
}
 
 }
 
}

        image.onload = function(){
		 for (let i = 0; i < MAXFIL; i++) {
		  	for (let j = 0; j < MAXCOL; j++) {
			drawTablero[i][j].draw();
		  	}
			}
		}


let tablero = new Tablero(drawTablero);

let juego = new Juego();
juego.jugar(JugadorUno, JugadorDos, tablero);
 


	function newCanvas(){
	 ctx.fillStyle = "blue";
	 ctx.fillRect(0, 0, canvas.width, canvas.height);
	

	for (var i = 0; i <MAX; i++) { 
		 drawFichasJugadorUno[i].draw();  
		}
		for (var j = 0; j <MAX; j++) { 
		 drawFichasJugadorDos[j].draw();  
		}

		for (let i = 0; i < MAXFIL; i++) {
		  	for (let j = 0; j < MAXCOL; j++) {
			drawTablero[i][j].draw();
		  	}
			}
		
	}

