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
    
    desactivarFichas(i){
        this.drawFichasJugador[i].noDrag();
    }
    obtenerPosX(i){
        this.drawFichasJugador[i].getPosX();
    }
    obtenerPosX(i){
        this.drawFichasJugador[i].getPosY();
    }
}