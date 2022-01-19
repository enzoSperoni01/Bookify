$(() => {
	recibirLibros();
	imprimirLibros(carrito);
	imprimirCarrito(carrito);
});

let carrito = JSON.parse(localStorage.getItem("carrito-cliente")) || [];
let libros;

const searchInput = document.getElementById("searchInput");
const booksFromDOM = document.getElementsByClassName("div-book");