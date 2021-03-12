document.querySelector('#enviar').addEventListener('click', function () {

    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let sujeto = document.querySelector('#sujeto').value;
    let mensaje = document.querySelector('#mensaje').value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(correo)) {
        if (nombre === "" || correo === "" || sujeto === "" || mensaje === "") {
            alert("por favor ingresa todos los campos con *")
            return null;
        } else {
            let url = "https://api.whatsapp.com/send?phone=573124868490&text=*Hola, me interesa*%0A*mas información*%0A%0A*Mi nombre*%0A" + nombre + "%0A*Mi correo:*%0A" + correo + "%0A*asunto:*%0A" + sujeto + "%0A*mensaje:*%0A" + mensaje;
            window.open(url);
        }
    } else {
        alert("Correo no valido")
    }

});