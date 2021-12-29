// Esto generara cada libro con sus propios valores dentro
// de las propiedades
class Libros {
    constructor(libro, genero, paginas) {
        /* El "capitalize" es en caso de que, si el usuario los escribe
        en minuscula(tanto el titulo como el genero), que los devuelva
        impresos en el DOM con mayuscula en la primera letra */
        this.libro = capitalize(libro); 
        this.genero = capitalize(genero);
        // parseInt() para asegurarse de que lo que ingresa es un "numero"
        // Y no un "string"
        this.paginas = parseInt(paginas);
    }
}