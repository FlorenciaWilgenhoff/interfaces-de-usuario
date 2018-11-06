class Personaje{
	constructor(){
		this.posX = 650;
		this.posY=550;
		this.estado ="pajaro";
		this.monedasRecolectadas = 0;
		this.vidas = 5;
		this.left = this.posX;
	    this.top = this.posY;
	    this.acelerarY = 0;
    	this.velocidadY = 0;
	    this.right = this.posX + document.getElementById("personaje").offsetWidth;
	    this.bottom = this.posY + document.getElementById('personaje').offsetHeight;
	}

	dibujarPersonaje() {
		if((this.estado=="pajaro")||(this.estado=="pajaroMuerto")||(this.estado=="pajaroChocado")){
		document.getElementById('personaje').className = this.estado;
		document.getElementById('personaje').style.left = this.posX.toString() + 'px';
    	document.getElementById('personaje').style.top = this.posY.toString() + 'px';
		}
	}
		actualizar() {
	    this.left = this.posX;
	    this.top = this.posY;
	    this.right = this.posX + document.getElementById('personaje').offsetWidth;
	    this.bottom = this.posY + document.getElementById('personaje').offsetHeight;
	    this.velocidadY += this.acelerarY;
	    this.posY += this.velocidadY;
	    this.acelerarY = 0;
	    if(this.posY >= 550) {
	      if(this.estado != 'pajaroMuerto'){
	        this.estado = 'pajaro';
	      }
	    }
	  }

    aplicarFuerza(fuerza) {
    this.acelerarY += fuerza;
    }
   
    moverCostados(fuerza){
      this.posX+=fuerza;
    }
    volar() {
      if(this.posY >= 550) {
        this.velocidadY *= 0;
        this.posY = 550;
      }
    }

  monedaColision(e) { 
      return (Math.abs(e.right - this.top - 75) < 10 && Math.abs(e.top - this.left) < 30);
	}
 
  rocaColision(e) {
	return (Math.abs(e.right - this.top - 75) < 10 && Math.abs(e.top - this.left) < 30);
	}
  
  
}

      