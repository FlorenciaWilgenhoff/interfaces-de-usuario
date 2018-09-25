 class Ficha{
  constructor(paramPosX, paramPosY, paramRadio,imagen, color1){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.img = imagen;
    this.color = color1;
    let ficha = this;
    this.arrastrar = false;
    this.termineMoverme = false;
    canvas.addEventListener("mousedown", function (e) {
      ficha.mouseDown(e);
    });
    canvas.addEventListener("mousemove", function (e) {
      ficha.mouseMove(e);
    });
    canvas.addEventListener("mouseup", function(e) {  
      ficha.mouseUp(e);
    });

    }
    getImagen(){
      return this.img;
    }

    draw  (){
        ctx.beginPath();
            var imagen = ctx.createPattern(this.img,"no-repeat");
            ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
            ctx.lineWidth = 7;
		    ctx.lineCap ="round";
		    ctx.strokeStyle = this.color;
	        ctx.stroke();
            ctx.fillStyle = imagen;
            ctx.fill();
            ctx.drawImage(this.img, this.posX - this.radio, this.posY - this.radio,  this.radio*2, this.radio*2);
            ctx.closePath();
    }

    mouseDown(e){
      var rect = canvas.getBoundingClientRect();
      var cX = e.clientX-rect.left;
      var cY = e.clientY-rect.top;
      var d1= Math.sqrt(Math.pow(cX-this.posX,2)+Math.pow(cY-this.posY,2));
      if(d1 <  this.radio){
        this.arrastrar = true;
      } 

    }

    
    mouseMove(e){

      if(this.arrastrar){
        var rect = canvas.getBoundingClientRect();
        this.setPos(e.clientX - rect.left, e.clientY - rect.top);
        newCanvas();
      }
    }

    mouseUp(e){
      this.arrastrar = false;
       this.termineMoverme=true;
    }

    setPos(posX, posY){
      this.clear();
      this.posX = posX;
      this.posY = posY;
      this.draw();

    }

    clear (){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      this.draw();
    }

    getColor(){
     return this.color;
    }

    drag(){
       this.arrastrar = true;
    }
    noDrag(){
       this.arrastrar = false;
    }
    getPosX(){
     return  this.posX;
    }
    getPosY(){
     return  this.posY;
    }
    meEstoyMoviendo(){
      return this.termineMoverme;
    }
  }