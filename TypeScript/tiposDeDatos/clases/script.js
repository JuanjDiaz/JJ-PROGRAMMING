"use strict";
class Pelicula {
    constructor() {
        this.nombre = "Fast&Furious";
    }
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada`);
    }
}
const pelicula = new Pelicula();
pelicula.proyectarEnCine();
