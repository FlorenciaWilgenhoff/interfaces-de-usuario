class Juego{
    //let fichaCont;
	 jugar(jTurno, jNoTurno){
       this.turnoJugador(jTurno);
    	this.desahabilitarFichas(jTurno, jNoTurno);
    	this.colocarFicha(jTurno, jNoTurno);
        if(fichaCont>=7){
            this.ganador();
        }
    }

    desahabilitarFichas(j1, j2){
        j1.activarFichas(MAX-1);
        j2.desahabilitarFichas(MAX-1);
        }

   turnoJugador(j){
    	if(j.getColour()=="yellow"){
    		return jugadorUno;
    	}else{
    		return JugadorDos;
    	}
    }

    colocarFicha(j1, j2){
    	for (var col = 0; col < MAXCOL; col++) {
        if((j1.drawFichasJugador[MAX-1].posX>= (drawTablero[0][col].posX)-10)&&
          (j1.drawFichasJugador[MAX-1].posX<= (drawTablero[0][col].posX)+10) && 
          (j1.drawFichasJugador[MAX-1].posY>= (drawTablero[0][col].posY)-10)&&
          (j1.drawFichasJugador[MAX-1].posY <= (drawTablero[0][col].posY)+10)){
        	this.cambioFicha(col, j1);
        }
    }
}
    
     cambioFicha(col, j){
    	var fil=0;
    	if(fil!=null){
    		drawTablero[fil][col]=j.drawFichasJugador[col];
            j.drawFichasJugador.splice(col, 1);
    		fichaCont++;
    	}
    	fil++;
    }
  
     ganador(posicion){
    	var pos=posicion;
    	if(posicion==null){
    		pos=0;
    	}
    	var contador = 0;
    		var fil = 0;
    		var col = 0;
    		while((drawTablero[fil][col].getColor()=="red")||(drawTablero[fil][col].getColor()=="blue")){
    			pos=col;
    			for(var fil=0;fil<MAXFIL;fil++){
    				for(var col=pos;col<MAXCOL;col++){
    					if(drawTablero[fil][col].getColor()==drawTablero[fil][col+1].getColor()){
    						contador++;
    					}else{
    						recorrerVerticalmente(fil, pos);
    					}
    						if(contador==4){
    							hayGanador();
    							fil=MAXFIL;
                                col=MAXCOL;
    						}
    					}
    				}
        }
turnoJugador(j);
     }
 
    	

     recorrerVerticalmente(fil, col){
    			for(var fila=fil;fila<MAXFIL;fila++){
    				for(var colum=col;colum<MAXCOL;colum++){
    					if(drawTablero[fila][colum].getColor()==drawTablero[fila+1][colum].getColor()){
    						contador++;
    					}else{
    						recorrerDiagonalmente(fila, colum, col);
    					}
    						if(contador==4){
    							hayGanador();
    							fila=MAXFIL;
                                colum=MAXCOL;
    						}
    					}
    				}
    			}
     
    recorrerDiagonalmente(fil, col,pos){
    			for(var fila=fil;fila<MAXFIL;fila++){
    				for(var colum=col;colum<MAXCOL;colum++){
    					if(drawTablero[fila][colum].getColor()==drawTablero[fila+1][colum+1].getColor()){
    						contador++;
    					}else{
    						ganador(pos);
    					}
    						if(contador==4){
    							hayGanador(j);
    							fila=MAXFIL;
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