class Casillero{
      constructor (paramPosX, paramPosY, paramRadio, image, color){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.radio = paramRadio;
            this.img = image;
            this.color = color;

        }
          
        draw(){
    	  ctx.beginPath();
            var imagen = ctx.createPattern(this.img,"repeat");
            ctx.arc(this.posX, this.posY, this.radio , 0, Math.PI*2);
            ctx.lineWidth = 7;
            ctx.lineCap ="round";
            ctx.strokeStyle = this.color;
            ctx.stroke();
            ctx.fillStyle = imagen;
            ctx.fill();
          
            ctx.closePath();	
        }

      
        posicX(){
            return this.posX;
        }
        posicY(){
            return this.posY;
        }
        getColor(){
            return this.color;
        }
        getImagen(){
            return this.img;
        }
        getRadius(){
            return this.radio;
        }
        
    }
       
 