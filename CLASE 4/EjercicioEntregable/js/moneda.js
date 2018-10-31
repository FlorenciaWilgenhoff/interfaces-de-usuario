class Moneda{
	constructor(){
		this.posX = 0;
		this.posY = 550;
		this.left = this.posX;
	    this.top = this.posY;
	    this.right = this.posX + document.getElementById('moneda').offsetWidth;
	    this.bottom = this.posY + document.getElementById('moneda').offsetHeight;
	}	
		dibujarMoneda() {
		    document.getElementById('moneda').style.top = this.posX.toString() + 'px';
		    document.getElementById('moneda').style.left = this.posY.toString() + 'px';
		    document.getElementById('moneda').className = this.estado;
		  }

		  actualizar() {
		    this.posX += 3;
		    this.left = this.posX;
		    this.top = this.posY;
		    this.right = this.posX + document.getElementById('moneda').offsetWidth;
		    this.bottom = this.posY + document.getElementById('moneda').offsetHeight;
		    if(this.posX > 1500) {
		      document.getElementById('moneda').style.opacity=1;
		      this.posX = 0;
		      this.posY = Math.floor((Math.random() * 550) + 500);
		    }
		  }

}
