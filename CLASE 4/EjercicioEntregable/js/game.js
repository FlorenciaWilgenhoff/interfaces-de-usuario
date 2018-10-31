personaje = new  Personaje();
moneda = new Moneda();
enemigo = new Enemigo();

let gravedad = 0.1;
function draw() {
  personaje.dibujarPersonaje();
  moneda.dibujarMoneda();
  enemigo.dibujarRoca();
}


function update() {
  if(personaje.estado != 'pajaroMuerto') {
    personaje.aplicarFuerza(gravedad);
    personaje.piso();
    personaje.actualizar();
    moneda.actualizar()
    enemigo.actualizar();
    if(personaje.monedaColision(moneda)) {
      personaje.monedasRecolectadas = personaje.monedasRecolectadas + 10;
      document.getElementById('score-num').innerHTML = personaje.monedasRecolectadas;
      moneda.document.getElementById('moneda').style.opacity = 0;
    }
    if(personaje.rocaColision(enemigo) && enemigo.choco == 0) {
        personaje.vidas = personaje.vidas-1;
        document.getElementById('vida'+personaje.vidas).src="images/vidaPerdida.png";
        enemigo.choco = 1;
        if(personaje.vidas == 0){
      personaje.estado = 'pajaroMuerto';
      document.getElementById('score-mensaje').innerHTML = personaje.monedasRecolectadas;
     }
    }
  }
  else enemigo.estado = 'roca';
}



function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}



document.onkeydown = function(e) {
  if((e.keyCode==38)&&(personaje.estado!='pajaroMuerto')) {
            personaje.aplicarFuerza(-5);
        }else{
        	 if((e.keyCode==37)&&(personaje.estado!='pajaroMuerto')) {
        	 	personaje.moverCostados(-5);
             }else{
             	if((e.keyCode==39)&&(personaje.estado!='pajaroMuerto')){
             		personaje.moverCostados(5);
             	}
             }
       } 
}



requestAnimationFrame(mainLoop);



