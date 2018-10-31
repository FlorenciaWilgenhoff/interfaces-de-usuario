class Juego{
   
	 jugar(jTurno, jNoTurno, tablero){
        //el primer turno arranca por el rojo
        //anuncia el ganador una ficha despues colocada
       this.turnoJugador(jTurno, jNoTurno, tablero);
       this.colocarFicha(jTurno, jNoTurno, tablero);
       if(fichaCont>6){
       this.ganador(jTurno);
        }
    	
     
    }

  

   turnoJugador(jTurno, jNoTurno, tablero){
    this.desahabilitarFichas(jTurno, jNoTurno);
    }

      desahabilitarFichas(jTurno, jNoTurno){
        jNoTurno.desactivarFichas(0);
        }

    colocarFicha(j1, j2, tablero){
        let i  =0;
        let fil=0;
       
    canvas.addEventListener("mousedown", function (e) {
      j1.eventoDown(i, e);
        //j1.activarFichas(i);
    });
    canvas.addEventListener("mousemove", function (e) {
      j1.eventoMove(i, e);

    });
    canvas.addEventListener("mouseup", function(e) { 
     j1.eventoUp(i, e);
     let col=0;
    if(j1.obtenerPosX(i)>=0&&j1.obtenerPosX(i)<85){
        col=0;
    }else{
        if(j1.obtenerPosX(i)>=85&&j1.obtenerPosX(i)<185){
            col=1;
        }else{
            if(j1.obtenerPosX(i)>=185&&j1.obtenerPosX(i)<315){
                col=2;
            }else{
                if( j1.obtenerPosX(i)>=315&&j1.obtenerPosX(i)<435){
                    col=3;
                }else{
                    if(j1.obtenerPosX(i)>=435&&j1.obtenerPosX(i)<560){
                        col=4;
                    }else{
                        if(j1.obtenerPosX(i)>=540&&j1.obtenerPosX(i)<640){
                            col=5;
                        }else{
                         if(j1.obtenerPosX(i)>=640&&j1.obtenerPosX(i)<785){
                            col=6;
                         }   
                        }
                    }
                }
            }
        }
    }

     let rect = canvas.getBoundingClientRect();
      let cX = e.clientX-rect.left;
      let cY = e.clientY-rect.top;
      let d1= Math.sqrt(Math.pow(cX-j1.obtenerPosX(i),2)+Math.pow(cY-j1.obtenerPosY(i),2));
      let d2 = Math.sqrt(Math.pow(cX-tablero.getPosX(fil, col),2)+Math.pow(cY-tablero.getPosY(fil, col),2));
      let dist= d1+d2;
      if(dist<j1.obtenerRadio(i)+tablero.getRadio(fil, col)){
       juego.cambioFicha(col, j1, j2, i, tablero);
      } 
    });
}

       

    
     cambioFicha(col, j1, j2, i, tablero){
       let fil = MAXFIL-1;
       while(fil>=0&&tablero.getOcup(fil, col)!="libre"){
           fil--;
       }
        let imagenNueva = new Image();
        imagenNueva.src ="images/fondo1.jpg";
        imagenNueva.onload = function(){
        drawTablero[fil][col]=(new Casillero(tablero.getPosX(fil, col),tablero.getPosY(fil, col),tablero.getRadio(fil, col),imagenNueva, j1.getColourChip(i), "ocupado"));
        tablero.draw(fil, col);
        fil=MAXFIL-1;
}
            j1.drawFichasJugador.splice(i, 1);
            this.nuevoCanvas(j1, j2);
    		fichaCont++;

        this.jugar(j2, j1, tablero);

    }


    nuevoCanvas(j1, j2){
     ctx.fillStyle = "blue";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     for (let j = 0; j <j2.drawFichasJugador.length; j++) { 
             j2.drawFichasJugador[j].draw();  
            }

    for (let i = 0; i <j1.drawFichasJugador.length; i++) { 
         j1.drawFichasJugador[i].draw();  
        }


        for (let fil = 0; fil < MAXFIL; fil++) {
            for (let col = 0; col < MAXCOL; col++) {
            drawTablero[fil][col].draw();
            }
            }
   
        
    }
 
   ganador(j1){
    console.log("Entro a ganador");
    let contador = 1;
    let col = 0;
    for(let fil=MAXFIL-1;fil>=0;fil--){
      while ((tablero.getOcup(fil, col)!="libre")&&(tablero.getOcup(fil, col+1)!="libre")&&(col<MAXCOL)){
        if(tablero.obtenerColor(fil, col)==tablero.obtenerColor(fil, col+1)){
          contador++;
          if(contador==4){
          this.hayGanador(j1);
          fil=0;
          col=MAXCOL;
        }
        }else{
          contador=1;
        }

        col++;
        
        if(contador==1){
          this.recorrerVerticalmente(j1);
        }
      }
    }

  }
     
     
  
 
    	

     recorrerVerticalmente(j1){
        console.log("Entro a verticalmente");
            let contador = 1;
            let fil = MAXFIL-1;
                for(let col=0;col<MAXCOL;col++){
                     while ((tablero.getOcup(fil, col)!="libre")&&(tablero.getOcup(fil-1, col)!="libre")&&(fil>0)){
                       if(tablero.obtenerColor(fil, col)==tablero.obtenerColor(fil-1, col)){
                            contador++;
                            if(contador==4){
                            console.log("Entro a ganador verticalmente");
                            console.log(j1);
                                this.hayGanador(j1);
                                fil=0;
                                col=MAXCOL;
                        }
                        }else{
                            contador=1;
                        }
                         fil--; 
                        
          
        if(contador==1){
            console.log("Entro a diagonal");
         this.recorrerDiagonalmenteAtras(j1);
         }
       }
  	}
  }
    			
  recorrerDiagonalmenteAtras(j1){
               console.log("Entro a diagonalmente atras");
            let contador = 1;
            let fil = MAXFIL-1;
            let  col=MAXCOL-1;
            
                     while ((tablero.getOcup(fil, col)!="libre")&&(tablero.getOcup(fil-1, col-1)!="libre")&&(fil>0)){
                       if(tablero.obtenerColor(fil, col)==tablero.obtenerColor(fil-1, col-1)){
                            contador++;
                            debugger;
                        }else{
                            contador=1;
                        }
                         fil--;
                         col--; 
                        if(contador==4){
                            console.log("Entro a ganador diagonalmente atras");
                            console.log(j1);
                                this.hayGanador(j1);
                                fil=0;
                                col=-1;
                        }
          
        if(contador==1){
            console.log("Entro a diagonal adelante");
         this.recorrerDiagonalmenteAtras(j1);
         }
         if(col==0){
              fil = MAXFIL-1;
              col=MAXCOL-1;
            }
       }

  }
     
    recorrerDiagonalmenteDelante(j1){
    		       console.log("Entro a diagonalmente adelante");
            let contador = 1;
            let fil = MAXFIL-1;
            let  col=0;
            
              while(col<MAXCOL){
                     while ((tablero.getOcup(fil, col)!="libre")&&(tablero.getOcup(fil-1, col+1)!="libre")&&(fil>0)&&(col<MAXCOL)){
                       if(tablero.obtenerColor(fil, col)==tablero.obtenerColor(fil-1, col+1)){
                            contador++;
                        }else{
                            contador=1;
                        }
                         fil--;
                         col++; 
                        if(contador==4){
                            console.log("Entro a ganador diagonalmente adelante");
                            console.log(j1);
                                this.hayGanador(j1);
                                fil=0;
                                col=MAXCOL;
                        }
            }
          
        if(contador==1){
            console.log("no gano nadie");
         this.recorrerDiagonalmenteAtras(j1);
         }
         if(col==MAXCOL){
                fil = MAXFIL-1;
                col=0;
            }
       
       
     }
  } 

                
hayGanador(j){
    console.log("hay ganador");
    ctx.font='70px Bangers';
    ctx.fillStyle=j.getColourChip(0);
    ctx.fillText("GANADOR",200,65);
    ctx.fillStyle=j.getColourChip(0);
    ctx.fillText(j.getNombre(0),450,65);
  }
}