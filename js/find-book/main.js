$(() => {
	recibirLibros();
	imprimirLibros(carrito);
});

let carrito = JSON.parse(localStorage.getItem("carrito-cliente")) || [];
let libros;

const searchInput = document.getElementById("searchInput");
const booksFromDOM = document.getElementsByClassName("div-book");