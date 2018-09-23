class Casillero{
      constructor (paramPosX, paramPosY, paramRadio, image){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.radio = paramRadio;
            this.img = image;

        }
          
        draw(){
    	  ctx.beginPath();
            var imagen = ctx.createPattern(this.img,"repeat");
            ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
            ctx.lineWidth = 7;
		    ctx.lineCap ="round";
		    ctx.strokeStyle = "black";
	        ctx.stroke();
            ctx.fillStyle = imagen;
            ctx.fill();
            
            ctx.closePath();	
        }
        posicX(){
            this.posX;
             console.log(this.posX);
        }
        posicY(){
            this.posY;
        }
    }
       
 