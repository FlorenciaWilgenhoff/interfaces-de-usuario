class Juego{
    
	 jugar(jTurno, jNoTurno, tablero){
       this.turnoJugador(jTurno, jNoTurno, tablero);
    	this.colocarFicha(jTurno, jNoTurno);
        if(fichaCont>=7){
            this.ganador();
        }
        fichaCont++;
    }

    desahabilitarFichas(jTurno, jNoTurno){
        jNoTurno.desactivarFichas(0);
        }

   turnoJugador(jTurno, jNoTurno, tablero){
    console.log("Primer turno");
             console.log(jTurno);
             console.log("Segundo turno");
             console.log(jNoTurno);
            
        this.desahabilitarFichas(jTurno, jNoTurno);
    }

    colocarFicha(j1, j2){
        var i  =0;
        let fil=0;
        let col=0;
    canvas.addEventListener("mousedown", function (e) {
      j1.eventoDown(i, e);
    });
    canvas.addEventListener("mousemove", function (e) {
      j1.eventoMove(i, e);

    });
    canvas.addEventListener("mouseup", function(e) { 
     j1.eventoUp(i, e);
     let rect = canvas.getBoundingClientRect();
      let cX = e.clientX-rect.left;
      let cY = e.clientY-rect.top;
      let d1= Math.sqrt(Math.pow(cX-j1.obtenerPosX(i),2)+Math.pow(cY-j1.obtenerPosY(i),2));
      let d2 = Math.sqrt(Math.pow(cX-tablero.getPosX(fil, col),2)+Math.pow(cY-tablero.getPosY(fil, col),2));
      let dist= d1+d2;
      if(dist<j1.obtenerRadio(i)+tablero.getRadio(fil, col)){
        console.log("antes",j1.drawFichasJugador[i]);
       juego.cambioFicha(col, j1, j2, i);
      } 
    });
}

       

    
     cambioFicha(col, j1, j2, i){
         let fil=MAXFIL-1;
         console.log("entroo");
    	if(tablero.obtenerColor(fil, col)=="black"){//PREGUNTAR SI ESE LUGAR ESTA OCUPADO
     let imagenNueva = new Image();
     imagenNueva.src ="images/4.png";
      
      drawTablero[fil][col]=(new Casillero(tablero.getPosX(fil, col),tablero.getPosY(fil, col),tablero.getRadio(fil, col),imagenNueva, j1.getColourChip(i)));
   
   imagenNueva.onload = function(){
    drawTablero[fil][col].draw();
      }
    }else{
        fil--
    }
    console.log("dksjk",j1.drawFichasJugador.splice(i, 1));
            j1.drawFichasJugador.splice(i, 1);
    		fichaCont++;
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