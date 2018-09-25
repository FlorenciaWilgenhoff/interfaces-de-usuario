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
    getImg(i){
        return this.drawFichasJugador[i].getImagen();
    }
    moviviendo(i){
        this.drawFichasJugador[i].drag();
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
    obtenerRadio(i){
        return this.drawFichasJugador[i].getRadio();
    }
    
    eventoDown(i, e){
        return this.drawFichasJugador[i].mouseDown(e);
    }
    eventoMove(i, e){
        return this.drawFichasJugador[i].mouseMove(e);
    }
    eventoUp(i, e){
            return this.drawFichasJugador[i].mouseUp(e);
    }
}