/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    let nameValid = true;
    if (containAtLeastOneNumber(texto)) {
        nameValid = false;
    }
    return nameValid;
}

function normalizarTexto(texto) {
    if(texto){
        let textLowerCase = texto.trim().toLowerCase()
        return textLowerCase[0].toUpperCase() + textLowerCase.slice(1)
    } 
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(email);
}

function normalizarEmail(email) {
    if(email){
        return email.trim().toLowerCase()
    }
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    let passValid = false;

    if(contrasenia.length >= 4 && containAtLeastOneNumber(contrasenia)) {
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

// Mostrar errores en HTML
function mostrarErrores(message) {
    let container = document.querySelector('#errors');
    container.innerHTML = `<li><small>${message}</small></li>`;
}

// Limpiar sección errores del HTML
function limpiarErrores() {
    let container = document.querySelector('#errors');
    container.innerHTML = '';
}

<<<<<<< HEAD
// Check whether text contains a number or not
function containNumber(text){
=======
// Verificar que un string contenga números
function containAtLeastOneNumber(text){
>>>>>>> 1ad37376d6143169e13d61c0894d76620afd88b4
    let containNumber = /\d/.test(text);
    return containNumber
}

<<<<<<< HEAD
// Verify if there is any input empty
function verifyEmptyInputs() {
    let allFormInputs = this.document.querySelectorAll('input')
    let emptyInputs = 0;
    allFormInputs.forEach(input => {
        if(input.value == ""){
            emptyInputs++
        }
    })
    return emptyInputs >= 1
=======
// Verificar si existe al menos un input vacío
function atLeastOneEmptyInput() {
    const formInputs = document.querySelectorAll('input')
    let invalidInputs = 0;
    for(input of formInputs) {
        if(input.value == ''){
            invalidInputs++
        }
    }
    return invalidInputs >= 1
>>>>>>> 1ad37376d6143169e13d61c0894d76620afd88b4
}