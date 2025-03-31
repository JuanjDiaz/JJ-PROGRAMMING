class Pelicula {
    nombre : string = "Fast&Furious"
    protagonistas ?: string[]
    actores ?: string[]

    proyectarEnCine(){
        console.log(`La película ${this.nombre} está siendo proyectada`)
    }
}

const pelicula = new Pelicula()

pelicula.proyectarEnCine()