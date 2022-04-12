/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {

}

function normalizarTexto(texto) {

}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(email);
}

function normalizarEmail(email) {

}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {

    let passValid = false;

    if(contrasenia.length >= 4 && containNumber(contrasenia)) {
        passValid = true
        console.log('VALIDA')
    } else { console.log('NO VALIDA');}

    return passValid;
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2;
}

function contraseniasNoSonVacias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 != '' && contrasenia_2 != '';
}

function validarNombreOApellido(text) {
    let nameValid = true;

    if (containNumber(text)) {
        nameValid = false;
        console.log('TIENE UN NUM')
    }
    
    return nameValid;
}

function mostrarErrores(message) {
    let container = document.querySelector('#errors');
    container.innerHTML = `<li>${message}</li>`;
}

function limpiarErrores(message) {
    let container = document.querySelector('#errors');
    container.innerHTML = '';
}

function containNumber(text){
    let containNumber = /\d/.test(text);
    return containNumber
}