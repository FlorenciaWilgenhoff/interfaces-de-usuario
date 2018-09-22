class Juego{
	 jugar(){
    	desahabilitarFichas();
    	turnoJugador();
    	colocarFicha();
    }

    desahabilitarFichas(){
    	mouseUp(j);
    }

   turnoJugador(j){
    	if(j.getColor()=="blue"){
    		return jugadorUno;
    	}else{
    		return JugadorDos;
    	}
    }

    colocarFicha(){// ver que solo compare con la ultima fila
    	for (var j = 0; j < drawTablero.length; j++) {
        if((this.posX >= (drawTablero[1][j].posX)-10)&&
          (this.posX <= (drawTablero[1][j].posX)+10) && 
          (this.posY >= (drawTablero[1][j].posY)-10)&&
          (this.posY <= (drawTablero[1][j].posY)+10)){
        	cambioFicha(j);
        }
    }
    var fichaCont;
    function cambioFicha(col){
    	var fil=0;
    	if(fil!=null){
    		drawTablero[fil][col]=drawFichasJugador[fil][col];
    		fichaCont++;
    	}
    	fil++;
    }
    ganador();
    function ganador(posicion){
    	var pos=posicion;
    	if(posicion==null){
    		pos=0;
    	}
    	var contador = 0;
    	if(fichaCont<=7){
    		var fil = 0;
    		var col = 0;
    		while((drawTablero[fil][col].getColor()=="red")||(drawTablero[fil][col].getColor()=="blue")){
    			pos=col;
    			for(var fil=0;fil<drawTablero.length;fil++){
    				for(var col=pos;col<drawTablero.length;col++){
    					if(drawTablero[fil][col].getColor()==drawTablero[fil][col+1].getColor()){
    						contador++;
    					}else{
    						recorrerVerticalmente(fil, pos);
    					}
    						if(contador==4){
    							hayGanador();
    							//se corta todo
    						}
    					}
    				}
    			}
     }
    	}
    }

    recorrerVerticalmente(fil, col){
    			for(var fila=fil;fila<drawTablero.length;fila++){
    				for(var colum=col;colum<drawTablero.length;colum++){
    					if(drawTablero[fila][colum].getColor()==drawTablero[fila+1][colum].getColor()){
    						contador++;
    					}else{
    						recorrerDiagonalmente(fila, colum, col);
    					}
    						if(contador==4){
    							hayGanador();
    							//se corta todo
    						}
    					}
    				}
    			}
     
    recorrerDiagonalmente(fil, col,pos){
    			for(var fila=fil;fila<drawTablero.length;fila++){
    				for(var colum=col;colum<drawTablero.length;colum++){
    					if(drawTablero[fila][colum].getColor()==drawTablero[fila+1][colum+1].getColor()){
    						contador++;
    					}else{
    						ganador(pos);
    					}
    						if(contador==4){
    							hayGanador(j);
    							//se corta todo
    						}
    					}
    				}
    			} 
hayGanador(j){
    $(".hayGanador").hide();
     $("#nombreGanador").html(j.getNombre());
  }
}