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
    let contains = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let passValid = false;
    let i = 0;

    if (contrasenia.length >= 4) {
        while (passValid == false && i <= contains.length) {
            if (contrasenia.includes(contains[i])) {
                passValid = true;
            }

            i++;
        }
    }

    return passValid;
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2;
}

function contraseniasNoSonVacias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 != '' && contrasenia_2 != '';
}

function validarNombreOApellido(text) {
    let noValid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-'];
    let i = 0;
    let nameValid = true;

    while (nameValid && i <= noValid.length) {
        if (text.includes(noValid[i])) {
            nameValid = false;
        }

        i++;
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