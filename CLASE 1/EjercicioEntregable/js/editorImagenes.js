let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var width= canvas.width;
var height= canvas.height ;
var imageData;
var image1 = new Image();
var erasing = false;
var drawing = false;
   ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(0, 0, canvas.width, canvas.height);

image1.onload = function(){
  acomodarImagen(image1, canvas.width, canvas.height);
  ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
  imageData = ctx.getImageData(0, 0, this.width, this.height);

}

function acomodarImagen(image1) {
  var sizeHeight = 450;
  var sizeWidth = 900;
  canvas.height = sizeHeight;
  canvas.width = sizeWidth;
  canvas.height = canvas.width * image1.height / image1.width;
  console.log(canvas.height);
  if(canvas.height > canvas.width)canvas.height = sizeHeight;
  console.log(canvas.height);
  canvas.width = canvas.height * image1.width / image1.height;
console.log(canvas.width);
if((image1.height<=900)&&(image1.width<=900)){
  canvas.height = image1.height;
  canvas.width = image1.width;
}
}


buttonLapiz();

function buttonLapiz(){
 var Lapiz = document.getElementById("lapiz");
  Lapiz.addEventListener("click", function(e){
    startDrawing();
  });
}

function startDrawing(){
   canvas.removeEventListener("mousedown",clickErasing, false);
   canvas.removeEventListener("mousemove",toDelete, false);
   canvas.removeEventListener("mouseup",releaseErasing, false);
      canvas.addEventListener("mousedown", clickDrawing, false);
      canvas.addEventListener("mousemove",toDraw, false);
      canvas.addEventListener("mouseup", releaseDrawing, false);
     
}


function clickDrawing(e){
     this.drawing = true;
     var rect = canvas.getBoundingClientRect();
     ctx.beginPath();
     ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function toDraw(e){
  var rect = canvas.getBoundingClientRect();
  var grosor;
     if(this.drawing){
     ctx.lineWidth = document.grosor.valorgrosor.selectedIndex+1;
         ctx.strokeStyle="#000000";
         ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
         ctx.stroke();
       
     }
}

function releaseDrawing(e){
     ctx.closePath();
     this.drawing = false;
}

buttonBorrar();

function buttonBorrar(){
var Borrar = document.getElementById("borrar");
  Borrar.addEventListener("click", function(e){
    startErasing();
    });
}

function startErasing(){
   canvas.removeEventListener("mousedown",clickDrawing, false);
   canvas.removeEventListener("mousemove",toDraw, false);
   canvas.removeEventListener("mouseup",releaseDrawing, false);
   canvas.addEventListener("mousedown",clickErasing,false);
   canvas.addEventListener("mousemove",toDelete,false);
   canvas.addEventListener("mouseup",releaseErasing,false);

}


function clickErasing(e){
     erasing = true;
     var rect = canvas.getBoundingClientRect();
     ctx.beginPath();
     ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}


function toDelete(e){
  var rect = canvas.getBoundingClientRect();
  if(erasing){
     ctx.lineWidth = document.grosor.valorgrosor.selectedIndex+1;
         ctx.strokeStyle="#FFFFFF";
         ctx.fillStyle="#FFFFFF";
         ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
         ctx.stroke();
     }
}

function releaseErasing(e){
     ctx.closePath();
     erasing = false;
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

function createCanvas(){
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var width= 900;
var height= 450;
canvas.width = width;
canvas.height = height;

   ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
}

buttonRestore();

function buttonRestore(){
  var restore = document.getElementById("restoreImage");
  restore.addEventListener("click", createCanvas);
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

 ctx.putImageData(imageData, 0,0);
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

ctx.putImageData(imageData, 0,0);
}

buttonSepia();

function buttonSepia(){
  var Sepia = document.getElementById("sepia");
  Sepia.addEventListener("click", function(){
    sepia();
  });
}
function negativo(){
    acomodarImagen(image1, canvas.width, canvas.height);
  for ( x = 0; x < canvas.width; x++) {
   for ( y = 0; y < canvas.height; y++) {
     index = (x + y * imageData.width) * 4;
     imageData.data[index+0]=255-getRed(imageData, x, y);
     imageData.data[index+1]=255-getGreen(imageData, x, y);
     imageData.data[index+2]=255-getBlue(imageData, x, y);
     imageData.data[index+3]=255;
   }
 }

 ctx.putImageData(imageData, 0,0);

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

ctx.putImageData(imageData, 0,0);

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

ctx.putImageData(imageData, 0,0);

}
buttonBrillo();

function buttonBrillo(){
  var brightness = document.getElementById("brillo");
  brightness.addEventListener("click", function(){
   var brightnessValueDefault=2;
   brillo(brightnessValueDefault);    
  });
}
sliderBrightness();
function sliderBrightness(){
  var rango = document.getElementById("range");
    rango.addEventListener("change", function(){

     brillo(this.value-50);
   });
}

sliderContrast();
function sliderContrast(){
  var rango = document.getElementById("range");
    rango.addEventListener("change", function(){

     contraste(this.value-50);
   });
}

sliderSaturation();
function sliderSaturation(){
  var rango = document.getElementById("range");
    rango.addEventListener("change", function(){

     saturacion(this.value-50);
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

ctx.putImageData(imageData, 0,0);
}

buttonContraste();

function buttonContraste(){
  var contrast = document.getElementById("contraste");
  contrast.addEventListener("click", function(){
    var contrastValueDefault = 50;
  contraste(contrastValueDefault);
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

 ctx.putImageData(imageData, 0,0);

}

buttonSaturacion();

function buttonSaturacion(){
  var saturation = document.getElementById("saturacion");
  saturation.addEventListener("click", function(){
      var saturationValueDefault = 3;
  saturacion(saturationValueDefault);
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
  ctx.putImageData(imageData, 0,0);
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

