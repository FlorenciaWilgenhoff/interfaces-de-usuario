class Juego{
    
	 jugar(jTurno, jNoTurno, tablero){
       this.turnoJugador(jTurno, jNoTurno, tablero);
    	//this.colocarFicha(jTurno, jNoTurno);
        if(fichaCont>=7){
            this.ganador();
        }
        fichaCont++;
    }

    desahabilitarFichas(jTurno, jNoTurno){
        jNoTurno.desactivarFichas(MAX-1);
        }

   turnoJugador(jTurno, jNoTurno, tablero){
    console.log("Primer turno");
             console.log(jTurno);
             console.log("Segundo turno");
             console.log(jNoTurno);
            /* let fil=0;
             let col=1;
             console.log(jTurno.getImg(fil));
             let imagen = new Image();
                imagen.src ="images/4.png";
             imagen.onload = function(){
            console.log(drawTablero[fil][col]=(new Casillero(tablero.getPosX(fil, col),tablero.getPosY(fil, col),tablero.getRadio(fil, col), imagen, jTurno.getColourChip(fil))));
   }*/
        this.desahabilitarFichas(jTurno, jNoTurno);
    }

    colocarFicha(j1, j2){
        var i  =0;
        this.itsDrag(j1);
        let fil=0;
        if(!this.itsDrag(j1)){
    	for (var col = 0; col < MAXCOL; col++) {
        if((j1.obtenerPosX(i))<= (tablero.getPosX(fil, col)+50)&&
          (j1.obtenerPosX(i))>=(tablero.getPosX(fil, col)-50) && 
          (j1.obtenerPosY(i))< (tablero.getPosX(fil, col))){
        	this.cambioFicha(col, j1, j2, i);
        }
         
    }
}
}

 itsDrag(j1){
j1.movimiento(i);
 }
       

    
     cambioFicha(col, j1, j2, i){
    	var fil= MAXFIL-1;
    	if(fil!=null){//PREGUNTAR SI ESE LUGAR ESTA OCUPADO
             let fil=0;
             let col=1;
             let imagen = new Image();
                imagen.src ="images/4.png";
             imagen.onload = function(){
           drawTablero[fil][col]=(new Casillero(tablero.getPosX(fil, col),tablero.getPosY(fil, col),tablero.getRadio(fil, col), imagen, jTurno.getColourChip(fil)));
   }
            j1.drawFichasJugador.splice(col, 1);
    		fichaCont++;
    	}
    	fil--;
        this.turnoJugador(j2, j1);
    }
  
     ganador(posicion){
    	var pos=posicion;
    	if(posicion==null){
    		pos=MAXCOL-1;
    	}
    	var contador = 0;
    		var fil = MAXFIL-1;
    		var col = MAXCOL-1;
    		while((tablero.obtenerColor(fil, col)=="red")||(tablero.obtenerColor(fil, col)=="blue")){
    			pos=col;
    			for(var fil=MAXFIL-1;fil>0;fil--){
    				for(var col=pos;col<MAXCOL;col++){
    					if(tablero.obtenerColor(fil, col)==tablero.obtenerColor(fil, col+1)){
    						contador++;
    					}else{
    						recorrerVerticalmente(fil, pos);
    					}
    						if(contador==4){
    							hayGanador();
    							fil=0;
                                col=MAXCOL;
    						}
    					}
    				}
        }
     }
 
    	

     recorrerVerticalmente(fil, col){
    			for(var fil=MAXFIL-1;fil>0;fil--){
                    for(var col=pos;col<MAXCOL;col++){
    					if(tablero.obtenerColor(fila, colum)==tablero.obtenerColor(fila-1, colum)){
    						contador++;
    					}else{
    						recorrerDiagonalmente(fila, colum, col);
    					}
    						if(contador==4){
    							hayGanador();
    							fila=0;
                                colum=MAXCOL;
    						}
    					}
    				}
    			}
                recorrerDiagonalmenteAtras(fil, col, pos){
                for(var fil=MAXFIL-1;fil>0;fil--){
                    for(var col=pos;col<MAXCOL;col++){
                        if(tablero.obtenerColor(fila, colum)==tablero.obtenerColor(fila-1, colum-1)){
                            contador++;
                        }else{
                            recorrerDiagonalmenteDelante(fila, colum, col);
                        }
                            if(contador==4){
                                hayGanador();
                                fila=0;
                                colum=MAXCOL;
                            }
                        }
                    }
                }
     
    recorrerDiagonalmenteDelante(fil, col,pos){
    			for(var fil=MAXFIL-1;fil>0;fil--){
                    for(var col=pos;col<MAXCOL;col++){
    					if(tablero.obtenerColor(fila, colum)==tablero.obtenerColor(fila-1, colum+1)){
    						contador++;
    					}else{
    						ganador(pos);
    					}
    						if(contador==4){
    							hayGanador(j);
    							fila=0;
                                colum=MAXCOL;
    						}
    					}
    				}
    			} 
hayGanador(j){
    $(".hayGanador").hide();
     $("#nombreGanador").html(j.getNombre());
  }
}