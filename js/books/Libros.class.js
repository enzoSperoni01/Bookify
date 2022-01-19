// Esto generara cada libro con sus propios valores dentro
// de las propiedades
class Libros {
    constructor(libro, genero, paginas) {
        this.libro = capitalize(libro); 
        this.genero = capitalize(genero);
        this.paginas = parseInt(paginas);
    }
}