class Tablero{
	constructor(drawCasilleros){
	this.drawCasilleros = drawCasilleros;
	}
	draw(fil, col){
        return this.drawCasilleros[fil][col].draw();
    }

	getPosX(fil, col){
        return this.drawCasilleros[fil][col].posicX();
    }

    getPosY(fil, col){
        return this.drawCasilleros[fil][col].posicY();
    }

     obtenerColor(fil, col){
            return this.drawCasilleros[fil][col].getColor();
        }

        getImg(fil, col){
        	return this.drawCasilleros[fil][col].getImagen();
        }
        getRadio(fil, col){
        	return this.drawCasilleros[fil][col].getRadius();
        }
        getOcup(fil, col){
        	return this.drawCasilleros[fil][col].getOcupacion();
        }
}