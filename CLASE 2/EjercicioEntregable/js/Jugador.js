class Jugador{
    constructor(colour, drawFichasJugador, nombre){
    	this.colour = colour;
    	this.drawFichasJugador = drawFichasJugador; 
    	this.nombre = nombre;
    }


    getColour(){
    	this.colour;
    }

    getNombre(){
    	 this.nombre;
    }
    activarFichas(i){
        this.drawFichasJugador[i].mouseDown(e);
    }
    desactivarFichas(i){
        this.drawFichasJugador[i].mouseUp(e);
    }
}