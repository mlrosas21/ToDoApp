/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    let nameValid = true;
    if (containNumber(texto)) {
        nameValid = false;
    }
    return nameValid;
}

function normalizarTexto(texto) {
    let textLowerCase = texto.trim().toLowerCase()
    return textLowerCase[0].toUpperCase() + textLowerCase.slice(1)
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(email);
}

function normalizarEmail(email) {
    return email.trim().toLowerCase()
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    let passValid = false;

    if(contrasenia.length >= 4 && containNumber(contrasenia)) {
        passValid = true
    } 

    return passValid;
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2;
}

function contraseniasNoSonVacias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 != '' && contrasenia_2 != '';
}

function validarContrasenias(e, pass1, pass2) {
    let contraseniaValida = validarContrasenia(e.target.value) == true;
    let contraseniasNoVacia = contraseniasNoSonVacias(pass1.value, pass2.value);

    if (contraseniaValida && contraseniasNoVacia) {
        let contraseniasIguales = compararContrasenias(pass1.value, pass2.value);
        if (!contraseniasIguales) {
            mostrarErrores('Las contraseñas no coniciden.');
        } else {
            limpiarErrores();
        }
    }
}

function mostrarErrores(message) {
    let container = document.querySelector('#errors');
    container.innerHTML = `<li><small>${message}</small></li>`;
}

function limpiarErrores() {
    let container = document.querySelector('#errors');
    container.innerHTML = '';
}

function containNumber(text){
    let containNumber = /\d/.test(text);
    return containNumber
}