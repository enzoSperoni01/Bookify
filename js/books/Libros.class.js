class Libros {
    constructor(libro, genero, paginas) {
        this.libro = libro.toUpperCase();
        this.genero = capitalize(genero);
        this.paginas = parseInt(paginas);
    }
}