//ARREGLAR LAPIZ Y GOMA PARA QUE DIBUJE BIEN
//ARREGLAR GOMA
//MEJORAR COLORES DE DISEÑO
//ARREGLAR SLIDERS
//AGREGAR SLIDER PARA EFECTO BLUR 
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var width= canvas.width;
var height= canvas.height ;
var imageData;
var imageDataOriginal;
var image1 = new Image();
//image1.src = "images/panda.jpg";
   ctx.fillStyle = "#FFFFFF";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

image1.onload = function(){
  canvas.width =this.width;
  canvas.height =this.height;
  ctx.drawImage(this, 0, 0);
  imageData = ctx.getImageData(0, 0, this.width, this.height);

}

function changeImage(imageData){
  ctx.drawImage(image1, 0, 0);
  ctx.putImageData(imageData, 0,0);

}

function startDrawing(){
canvas.addEventListener("mousedown",click,false);
      canvas.addEventListener("mousemove",toDraw,false);
      canvas.addEventListener("mouseup",release,false);
}
function startErasing(){
canvas.addEventListener("mousedown",click,false);
      canvas.addEventListener("mousemove",toDelete,false);
      canvas.addEventListener("mouseup",release,false);
}

function click(e){
     draw = true;
//Indico que vamos a dibujar
     ctx.beginPath();
//Averiguo las coordenadas X e Y por dónde va pasando el mouse
     ctx.moveTo(e.clientX, e.clientY);
}

function toDraw(e){
     if(draw){
         ctx.strokeStyle="#000000";
         ctx.lineTo(e.clientX,e.clientY);
         ctx.stroke();
     }
}
function toDelete(e){ //ARREGLAR ERROR DE QUE SI EMPIEZO LAPIZ Y DESPUES GOMA ME TOMA
  //EL MISMMO COLOR QUE EL LAPIZ
  if(draw){//que el borde de la linea sea blanco
         ctx.strokeStyle="#FFFFFF";
         ctx.lineWidth = 5;
         ctx.lineTo(e.clientX,e.clientY);
         ctx.stroke();
     }
}
function release(e){
//Indico que termino el dibujo
     ctx.closePath();
     draw = false;
}


buttonLapiz();

function buttonLapiz(){
 var Lapiz = document.getElementById("lapiz");
  Lapiz.addEventListener("click", function(){
    startDrawing();
  });
}


buttonBorrar();

function buttonBorrar(){
var Borrar = document.getElementById("borrar");
  Borrar.addEventListener("click", function(){
    startErasing();
    });
}

buttonSave(); 

function buttonSave(){
  var save = document.getElementById('saveImage');
save.addEventListener('click', function (e) {
  var c=document.getElementById("canvas");
    var dataURL = c.toDataURL('images/png');
    save.href = dataURL;
});
}

buttonSelectImage();

function buttonSelectImage() {
    var select = document.getElementById("selectImage");
  select.addEventListener("change", function(e){
        var file = e.target.files[0],
            imageType = /image.*/;
        
        if (!file.type.match(imageType))
            return;
        
        var reader = new FileReader();
        reader.onload = Onload;
        reader.readAsDataURL(file);
        
    });
};

 function Onload(e) {
        image1.src= e.target.result;  
    }

buttonRestore();

function buttonRestore(){
  var restore = document.getElementById("restoreImage");
  restore.addEventListener("click", changeImage);
}

function blackAndWhite(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4;
     var BlackAndWhite = (getRed(imageData, x, y)+ getGreen(imageData, x , y)+ getBlue(imageData, x , y))/3;
     imageData.data[index+0]=BlackAndWhite;
     imageData.data[index+1]=BlackAndWhite;
     imageData.data[index+2]=BlackAndWhite;
     imageData.data[index+3]=255;

   }
 }

 changeImage(imageData);
}

buttonBlackAndWhite();

function buttonBlackAndWhite(){
  var escalaGris = document.getElementById("blackAndWhite");
  escalaGris.addEventListener("click", function(){
    blackAndWhite();
  });
}

function sepia(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    index = (x + y * imageData.width) * 4;
    var calculoRed= (getRed(imageData, x, y) * 0.393) + (getGreen(imageData, x, y) * 0.769) + (getBlue(imageData, x, y) * 0.189)
    var calculoGreen= (getRed(imageData, x, y) * 0.349) + (getGreen(imageData, x, y) * 0.686) + (getBlue(imageData, x, y) * 0.168)
    var calculoBlue=(getRed(imageData, x, y) * 0.272) + (getGreen(imageData, x, y) * 0.534) + (getBlue(imageData, x, y) * 0.131)
    imageData.data[index+0]=calculoRed+30;
    imageData.data[index+1]=calculoGreen+25;
    imageData.data[index+2]=calculoBlue;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);
}

buttonSepia();

function buttonSepia(){
  var Sepia = document.getElementById("sepia");
  Sepia.addEventListener("click", function(){
    sepia();
  });
}
function negativo(){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=255-getRed(imageData, x, y);
     imageData.data[index+1]=255-getGreen(imageData, x, y);
     imageData.data[index+2]=255-getBlue(imageData, x, y);
     imageData.data[index+3]=255;
   }
 }

 changeImage(imageData);

}

buttonNegativo();

function buttonNegativo(){
  var negative = document.getElementById("negativo");
  negative.addEventListener("click", function(){
    negativo();
  });
}

function binarizacion (){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    var binarizacion =110;
    var v = (0.2126 * getRed(imageData, x, y) + 0.7152 * getGreen(imageData, x, y) + 0.0722 * getBlue(imageData, x, y) >= binarizacion) ? 255 : 0;
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=v;
    imageData.data[index+1]=v;
    imageData.data[index+2]=v;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);

}

function buttonBinarizacion(){
  var binary = document.getElementById("binarizacion");
  binary.addEventListener("click", function(){
    binarizacion();
  });
}

buttonBinarizacion();

function brillo(brightnessValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=brightnessValue*getRed(imageData, x, y);
    imageData.data[index+1]=brightnessValue*getGreen(imageData, x, y);
    imageData.data[index+2]=brightnessValue*getBlue(imageData, x, y);
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);

}
buttonBrillo();

function buttonBrillo(){
  var brightness = document.getElementById("brillo");
  brightness.addEventListener("click", function(){
    var rango = document.getElementById("range");
    rango.addEventListener("change", function(){

     brillo(this.value-50); 
   
});    
  });
}

function contraste(contrastValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
    var factor = (259 * (contrastValue + 255)) / (255 * (259 - contrastValue));
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0]=factor*(getRed(imageData, x, y)-128)+128;
    imageData.data[index+1]=factor*(getGreen(imageData, x, y)-128)+128;
    imageData.data[index+2]=factor*(getBlue(imageData, x, y)-128)+128;
    imageData.data[index+3]=255;
  }
}

changeImage(imageData);
}

buttonContraste();

function buttonContraste(){
  var contrast = document.getElementById("contraste");
  contrast.addEventListener("click", function(){
   var rango = document.getElementById("range");
    rango.addEventListener("change", function(){
     contraste(this.value-50); 
   
});
});    
  }



function saturacion (saturationValue){
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4; 
     var luzRed = 0.3086;
     var luzGreen = 0.6094;
     var luzBlue = 0.0820;
     var az = (1 - saturationValue)*luzRed + saturationValue;
     var bz = (1 - saturationValue)*luzGreen;
     var cz = (1 - saturationValue)*luzBlue;
     var dz = (1 - saturationValue)*luzRed;
     var ez = (1 - saturationValue)*luzGreen + saturationValue;
     var fz = (1 - saturationValue)*luzBlue;
     var gz = (1 - saturationValue)*luzRed;
     var hz = (1 - saturationValue)*luzGreen;
     var iz = (1 - saturationValue)*luzBlue + saturationValue;
     var saturadoRed = (az * getRed(imageData, x, y) + bz * getGreen(imageData, x, y) + cz * getBlue(imageData, x, y)); 
     var saturadoGreen = (dz * getRed(imageData, x, y) + ez * getGreen(imageData, x, y) + fz * getBlue(imageData, x, y)); 
     var saturadodBlue = (gz * getRed(imageData, x, y)+ hz * getGreen(imageData, x, y) + iz * getBlue(imageData, x, y)); 
     imageData.data[index+0]=saturadoRed;
     imageData.data[index+1]=saturadoGreen;
     imageData.data[index+2]=saturadodBlue;
     imageData.data[index+3]=255;
   }
 }

 changeImage(imageData);

}

buttonSaturacion();

function buttonSaturacion(){
  var saturation = document.getElementById("saturacion");
  saturation.addEventListener("click", function(){
  var rango = document.getElementById("range");
    rango.addEventListener("change", function(){
     saturacion(this.value-49); 
   
});
});    
  }

  function applyMatrix(matrix,suma){
   for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
      var r= Math.floor(( getRed(imageData,x-1,y-1)*matrix[0][0] + getRed(imageData,x,y-1)*matrix[0][1] + getRed(imageData,x+1,y-1)*matrix[0][2] +
                getRed(imageData,x-1,y)*matrix[1][0] + getRed(imageData,x,y)*matrix[1][1] + getRed(imageData,x+1,y)*matrix[1][2] +
                getRed(imageData,x-1,y+1)*matrix[2][0] + getRed(imageData,x,y-1)*matrix[2][1] + getRed(imageData,x+1,y+1)*matrix[2][2])/suma);
        var b= Math.floor(( getBlue(imageData,x-1,y-1)*matrix[0][0] + getBlue(imageData,x,y-1)*matrix[0][1] + getBlue(imageData,x+1,y-1)*matrix[0][2] +
                 getBlue(imageData,x-1,y)*matrix[1][0] + getBlue(imageData,x,y)*matrix[1][1] + getBlue(imageData,x+1,y)*matrix[1][2] +
                 getBlue(imageData,x-1,y+1)*matrix[2][0] + getBlue(imageData,x,y-1)*matrix[2][1] + getBlue(imageData,x+1,y+1)*matrix[2][2])/suma);
       var g= Math.floor(( getGreen(imageData,x-1,y-1)*matrix[0][0] + getGreen(imageData,x,y-1)*matrix[0][1] + getGreen(imageData,x+1,y-1)*matrix[0][2] +
                getGreen(imageData,x-1,y)*matrix[1][0] + getGreen(imageData,x,y)*matrix[1][1] + getGreen(imageData,x+1,y)*matrix[1][2] +
                getGreen(imageData,x-1,y+1)*matrix[2][0] + getGreen(imageData,x,y-1)*matrix[2][1] + getGreen(imageData,x+1,y+1)*matrix[2][2])/suma);



        setPixel(imageData,x,y,r,g,b,255);
      }
    }
  changeImage(imageData);
}
function Blur(imageData){
  var matrix=[[1,1,1],[1,1,1],[1,1,1]];
  applyMatrix(matrix,9);

}

buttonBlur();
function buttonBlur(){
   var blur = document.getElementById("blur");
  blur.addEventListener("click", function(){
    Blur();
  });
}


function Suavizado(){
  var matrix=[[1,1,1],[1,8,1],[1,1,1]];
  applyMatrix(matrix,16);
}
 


buttonSuavizado();
function buttonSuavizado(){
   var suavizado = document.getElementById("suavizado");
  suavizado.addEventListener("click", function(){
    Suavizado();
  });
}



function getRed(imageData, x, y){
  var index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
}

function getGreen(imageData, x, y){
  var index = (x + y * imageData.width) * 4;
  return imageData.data[index + 1];
}

function getBlue(imageData, x, y){
  var index = (x + y * imageData.width) * 4;
  return imageData.data[index + 2];
}

function setPixel(imageData,x,y,r,g,b,a){
  index= (x+y*imageData.width)*4;
  imageData.data[index+0] =r;
  imageData.data[index+1] =g;
  imageData.data[index+2] =b;
  imageData.data[index+3] =a;
}

