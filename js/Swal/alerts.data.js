const emailRecibido = {
    title: "Correo recibido!",
    text: "Tu email ha sido recibido con exito!",
    icon: "success",
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false
};
const emailError = {
    title: '<h3 style="color: white;">Ha habido un error!</h3>',
    html: '<b style="color: white;">Debes llenar la casilla con tu correo</b>',
    icon: 'warning',
    background: 'hsl(210, 45%, 45%)',
    timer: 3500,
    timerProgressBar: true,
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false
}
const emailRepetido = {
    title: '<h3>Tu email ya fue registrado</h3>',
    icon: 'info',
    background: 'hsl(0, 0%, 90%)',
    timer: 3500,
    timerProgressBar: true,
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false
}
const compraRealizada = {
    title: "Realizado!",
    text: "Tu compra se ha realizado con exito!",
    icon: "success",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false
}
const errorDeCompra = {
    title: "No hay libros!",
    text: "No podemos acreditar tu compra aún",
    icon: "warning",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false
}