     let canvas = document.getElementById("canvas");
     let ctx = canvas.getContext("2d"); 


      function fichaSinDrag(paramPosX, paramPosY, paramRadio, image){
            this.posX = paramPosX;
            this.posY = paramPosY;
            this.radio = paramRadio;
            this.img = image;

        }
          
        fichaSinDrag.prototype.draw =  function (){
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
       

    function Ficha(paramPosX, paramPosY, paramRadio,imagen, color1){
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.img = imagen;
    this.color = color1;
    let ficha = this;
    this.encastre = false;
    canvas.addEventListener("mousedown", function (e) {
      ficha.mouseDown(e);
    });
    canvas.addEventListener("mousemove", function (e) {
      ficha.mouseMove(e);
    });
    canvas.addEventListener("mouseup", function(e) {  
      ficha.mouseUp(e);
    });

    function encastre(){
      for (var i = 0; i < drawTablero.length; i++) {
        if((this.posX >= (drawTablero[i].posX)-10)&&
          (this.posX <= (drawTablero[i].posX)+10) && 
          (this.posY >= (drawTablero[i].posY)-10)&&
          (this.posY <= (drawTablero[i].posY)+10)&&
          (this.tipo == (drawTablero[i].tipo)));
          this.encastre = true;
        this.posX=drawTablero[i].posX;
        this.posY=drawTablero[i].posY;
        drawTablero[i].arrastrar=false;
          //redibujar el canvas sin esta figura draggeable
        }
      }
    }

    Ficha.prototype.draw =  function (){
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

    Ficha.prototype.mouseDown =  function (e){
      var rect = canvas.getBoundingClientRect();
      var cX = e.clientX-rect.left;
      var cY = e.clientY-rect.top;
      var d1= Math.sqrt(Math.pow(cX-this.posX,2)+Math.pow(cY-this.posY,2));
      if(d1 <  this.radio){
        this.arrastrar = true;
      } 

    }

    Ficha.prototype.mouseMove=  function (e){

      if(this.arrastrar){
        var rect = canvas.getBoundingClientRect();
        this.setPos(e.clientX - rect.left, e.clientY - rect.top);
        newCanvas();
      }
    }

    Ficha.prototype.mouseUp=  function (e){
      this.arrastrar = false;
    }

    Ficha.prototype.setPos=  function (posX, posY){
      this.clear();
      this.posX = posX;
      this.posY = posY;
      this.draw();

    }

    Ficha.prototype.clear=  function (){
      ctx.clearRect(0,0, canvas.width, canvas.height);
      this.draw();
    }

 let drawTablero = []; 
 let drawFichas = []; 
 let imagen = new Image();
        imagen.src ="images/4.png";
        imagen.onload = function(){

  drawFichas.push(new Ficha (50, 50, 45, imagen, "red"));
  drawFichas.push(new Ficha (170, 50, 45, imagen, "yellow"));

 
	 for (var i = 0; i < drawFichas.length; i++) {
	  drawFichas[i].draw(); 
	}
}

  let image = new Image();
        image.src ="images/fondo1.jpg";
        image.onload = function(){

  drawTablero.push(new fichaSinDrag (50, 270, 45, this ));


   drawTablero.push(new fichaSinDrag (50, 160, 45, this));
  drawTablero.push(new fichaSinDrag (170, 160, 45, this));
  drawTablero.push(new fichaSinDrag(290, 160, 45, this));
  drawTablero.push(new fichaSinDrag(410, 160, 45, this));
  drawTablero.push(new fichaSinDrag(530, 160, 45, this));
  drawTablero.push(new fichaSinDrag(650, 160, 45, this));




  drawTablero.push(new fichaSinDrag (170, 270, 45, this));
  drawTablero.push(new fichaSinDrag(290, 270, 45, this));
  drawTablero.push(new fichaSinDrag(410, 270, 45, this));
  drawTablero.push(new fichaSinDrag(530, 270, 45, this));
  drawTablero.push(new fichaSinDrag(650, 270, 45, this));


   drawTablero.push(new fichaSinDrag (50, 380, 45, this));
  drawTablero.push(new fichaSinDrag (170, 380, 45,this));
  drawTablero.push(new fichaSinDrag(290, 380, 45, this));
  drawTablero.push(new fichaSinDrag(410, 380, 45, this));
  drawTablero.push(new fichaSinDrag(530, 380, 45, this));
  drawTablero.push(new fichaSinDrag(650, 380, 45, this));

   drawTablero.push(new fichaSinDrag (50, 490, 45, this));
  drawTablero.push(new fichaSinDrag (170, 490, 45, this));
  drawTablero.push(new fichaSinDrag(290, 490, 45, this));
  drawTablero.push(new fichaSinDrag(410, 490, 45, this));
  drawTablero.push(new fichaSinDrag(530, 490, 45, this));
  drawTablero.push(new fichaSinDrag(650, 490, 45, this));

   drawTablero.push(new fichaSinDrag (50, 600, 45, this));
  drawTablero.push(new fichaSinDrag (170, 600, 45, this));
  drawTablero.push(new fichaSinDrag(290, 600, 45, this));
  drawTablero.push(new fichaSinDrag(410, 600, 45, this));
  drawTablero.push(new fichaSinDrag(530, 600, 45, this));
  drawTablero.push(new fichaSinDrag(650, 600, 45, this));

   drawTablero.push(new fichaSinDrag (50, 710, 45, this));
  drawTablero.push(new fichaSinDrag (170, 710, 45, this));
  drawTablero.push(new fichaSinDrag(290, 710, 45,this));
  drawTablero.push(new fichaSinDrag(410, 710, 45, this));
  drawTablero.push(new fichaSinDrag(530, 710, 45, this));
  drawTablero.push(new fichaSinDrag(650, 710, 45, this));

   drawTablero.push(new fichaSinDrag (50, 820, 45, this));
  drawTablero.push(new fichaSinDrag (170, 820, 45, this));
  drawTablero.push(new fichaSinDrag(290, 820, 45, this));
  drawTablero.push(new fichaSinDrag(410, 820, 45, this));
  drawTablero.push(new fichaSinDrag(530, 820, 45, this));
  drawTablero.push(new fichaSinDrag(650, 820, 45, this ));



  for (var i = 0; i < drawTablero.length; i++) {
    drawTablero[i].draw();  
}
}


	function newCanvas(){
	 ctx.fillStyle = "blue";
	 ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	for (var i = 0; i < drawTablero.length; i++) {
	  drawTablero[i].draw();    
	}
		for (var i = 0; i < drawFichas.length; i++) {
			  drawFichas[i].draw(); 
			}

	}