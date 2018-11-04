class Enemigo{
	constructor(){
	  this.posX = 0;
      this.posY = 1300;
      this.colision=0;	
      this.left = this.posX;
      this.top = this.posY;
      this.estado = "roca";
      this.choco=0;
      this.right = this.posX + document.getElementById("roca").offsetWidth;
      this.bottom = this.posY + document.getElementById("roca").offsetHeight;  
      this.h=document.getElementById("roca").offsetHeight;
      this.w=document.getElementById("roca").offsetWidth;
	}

	dibujarRoca() {
    document.getElementById("roca").style.top = this.posX.toString() + 'px';
    document.getElementById("roca").style.left = this.posY.toString() + 'px';
    document.getElementById("roca").className = this.estado;
  }

  actualizar() {
    this.posX += 3;
    this.left = this.posX;
    this.top = this.posY;
    this.right = this.posX +document.getElementById("roca").offsetWidth;
    this.bottom = this.posY + document.getElementById("roca").offsetHeight;
    if(this.posX > 1500) {
      this.choco=0;
      this.posX = 0;
      this.posY = Math.floor((Math.random() * 1300) + 1350);
    }
  }
}