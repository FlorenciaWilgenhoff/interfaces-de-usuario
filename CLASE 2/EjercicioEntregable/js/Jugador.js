class Jugador{
    constructor(colour, drawFichasJugador, nombre){
    	this.colour = colour;
    	this.drawFichasJugador = drawFichasJugador; 
    	this.nombre = nombre;
    }


    getColourChip(i){
    	return this.drawFichasJugador[i].getColor();
    }

    getNombre(){
    	 return this.nombre;
    }
    getImg(){
        return this.drawFichasJugador[0].getImagen();
    }
    
    desactivarFichas(i){    
        this.drawFichasJugador[i].noDrag();
    }
    obtenerPosX(i){
        return this.drawFichasJugador[i].getPosX();
    }
    obtenerPosY(i){
        return this.drawFichasJugador[i].getPosY();
    }
    movimiento(i){
        return this.drawFichasJugador[i].meEstoyMoviendo();
    }
}