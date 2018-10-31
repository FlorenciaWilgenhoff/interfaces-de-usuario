const pisoY = 550;
class Personaje{
	constructor(){
		this.posX = 650;
		this.posY=pisoY;
		this.estado ="pajaro";
		this.monedasRecolectadas = 0;
		this.vidas = 5;
		this.left = this.posX;
	    this.top = this.posY;
	    this.acelerarY = 0;
	    this.estaEnElPiso = true;
    	this.velocidadY = 0;
	    this.right = this.posX + document.getElementById("personaje").offsetWidth;
	    this.bottom = this.posY + document.getElementById('personaje').offsetHeight;
	}

	dibujarPersonaje() {
		if((this.estado=="pajaro")||(this.estado=="pajaroMuerto")){
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
	    if(this.posY >= pisoY) {
	      if(this.estado != 'pajaroMuerto') {
	        this.estado = 'pajaro';
	      }
	    }
	  }



  monedaColision(other) {
    if(document.getElementById('personaje').style.opacity==1){
      let oLeft = other.left+80;
      let oRight = other.right;
      let oTop = other.top;
      let oBottom = other.bottom;
      console.log("Izquierda:"+oLeft);
      console.log("Derecha:"+oRight);
      console.log("top:"+oTop);
      console.log("fondo:"+oBottom);
      return !(this.left > oRight || this.right < oLeft || this.top > oBottom || this.bottom < oTop);
    }else {
    return false;
  }
  }

  rocaColision(other) {
    let oLeft = other.left+30;
    let oRight = other.right-20;
    let oTop = other.top+50;
    let oBottom = other.bottom;
    return !(this.left > oRight || this.right < oLeft || this.top > oBottom || this.bottom < oTop);
  }

  aplicarFuerza(fuerza) {
    this.acelerarY += fuerza;
  }
 
  moverCostados(fuerza){
  	this.posX+=fuerza;
  }
  piso() {
    if(this.posY >= pisoY) {
      this.velocidadY *= 0;
      this.posY = pisoY;
    }
  }
}

      