function enviarModal() {
    let correo = $("#email-newsletter")[0].value;
    if(correo !== "" && localStorage.getItem(`newsletter-${correo}`) !== correo){
        localStorage.setItem(`newsletter-${correo}`, correo);
        Swal.fire(emailRecibido);
    } else if(correo !== "" && correo === localStorage.getItem(`newsletter-${correo}`)) {
        Swal.fire(emailRepetido);
    } else {
        Swal.fire(emailError);
    }
}