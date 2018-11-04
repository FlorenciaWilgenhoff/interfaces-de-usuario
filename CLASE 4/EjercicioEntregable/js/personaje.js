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
	    if(this.posY >= 550) {
	      if(this.estado != 'pajaroMuerto') {
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
        let personaje = document.getElementById('personaje');
     let ry= personaje.offsetTop;
        let rx = personaje.offsetLeft;
        let rh = personaje.offsetHeight;
        let rw = personaje.offsetWidth;

          let ey = e.top;
          let ex = e.left;
          let eh = e.h;
          let ew = e.w;
      return!(((ry + rh) < (ey)) ||
            (ry> (ey + eh)) ||
            ((rx + rw) < ex) ||
            (rx > (ex + ew)));
  
    return false;
  }

  
  rocaColision(e) {
    let personaje = document.getElementById('personaje');
     let ry= personaje.offsetTop;
        let rx = personaje.offsetLeft;
        let rh = personaje.offsetHeight;
        let rw = personaje.offsetWidth;

       console.log(e.top);
          let ey = e.top;
          let ex = e.left;
          let eh = e.h;
          let ew = e.w;
       /* console.log(ry);
        console.log(rh);
        console.log(rx);
        console.log(rw);
        console.log(ey);
        console.log(eh);
        console.log(ex);
        console.log(ew);
      debugger;
*/
        return!(
            ((ry + rh) < (ey)) ||
            (ry> (ey + eh)) ||
            ((rx + rw) < ex) ||
            (rx > (ex + ew)));

    }
  
}

      