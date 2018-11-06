personaje = new  Personaje();
moneda = new Moneda();
enemigo = new Enemigo();
let juegoTerminado=false;
let gravedad = 0.1;
function dibujarPersonajes() {
  personaje.dibujarPersonaje();
  moneda.dibujarMoneda();
  enemigo.dibujarRoca();
}


function actualizar() {
  if((personaje.estado != 'pajaroMuerto')||(juegoTerminado!=true)) {
    personaje.aplicarFuerza(gravedad);
    personaje.volar();
    personaje.actualizar();
    moneda.actualizar()
    enemigo.actualizar();

    if(personaje.monedaColision(moneda)) {
      personaje.monedasRecolectadas = personaje.monedasRecolectadas + 10;
      document.getElementById('score-num').innerHTML = personaje.monedasRecolectadas;
      document.getElementById('moneda').style.opacity = 0;
      if(personaje.monedasRecolectadas>=500){
        juegoTerminado=true;
        document.getElementById('mensajeDos').style.display="block";
        document.getElementById('score-mensajeDos').innerHTML = personaje.monedasRecolectadas;  
        document.getElementById("btn-reiniciarDos").onclick=function(){
        document.getElementById('mensajeDos').style.display="none";
        window.location.href="juego.html";
      }
    }
    }


    if(personaje.rocaColision(enemigo) && enemigo.choco == 0) {
       personaje.vidas = personaje.vidas-1;
       personaje.estado='pajaroChocado';
        document.getElementById('vida'+personaje.vidas).src="images/vidaPerdida.png";
         document.getElementById('roca').style.opacity = 0;
        enemigo.choco = 1;

        if(personaje.vidas == 0){ 
        personaje.estado = 'pajaroMuerto';
         juegoTerminado=true;
        document.getElementById('mensaje').style.display="block";
        document.getElementById('score-mensaje').innerHTML = personaje.monedasRecolectadas;  
        document.getElementById("btn-reiniciar").onclick=function(){
        document.getElementById('mensaje').style.display="none";
        window.location.href="juego.html";
}
     }

    }
  }
  else enemigo.estado = 'roca';
}



function mainLoop() {
  if(juegoTerminado!=true){
    actualizar();
    dibujarPersonajes();
    requestAnimationFrame(mainLoop);
}
}


document.onkeydown = function(e) {
  if((e.keyCode==38)&&(personaje.estado!='pajaroMuerto')) {
            personaje.aplicarFuerza(-5);
        }else{
        	 if((e.keyCode==37)&&(personaje.estado!='pajaroMuerto')) {
        	 	personaje.moverCostados(-6);
             }else{
             	if((e.keyCode==39)&&(personaje.estado!='pajaroMuerto')){
             		personaje.moverCostados(6);
             	}
             }
       } 
}



requestAnimationFrame(mainLoop);



