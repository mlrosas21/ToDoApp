window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const apiBaseUrl = 'https://ctd-todo-api.herokuapp.com/v1'




    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const firstName = normalizarTexto(document.querySelector('#inputNombre').value)
        const lastName = normalizarTexto(document.querySelector('#inputApellido').value)
        const email = normalizarEmail(document.querySelector('#inputEmail').value)
        const password = document.querySelector('#inputPassword').value
        event.preventDefault()
       
        if(!verifyEmptyInputs()){
            console.log(firstName)
            console.log(lastName)
            console.log(email);
            console.log(password);
        } else {
            alert('Existen campos sin rellenar.')
        }
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function registrarUsuario(settings) {
        // Acá llamamos a la API

    };

    document.querySelector('#inputNombre').addEventListener('keyup', (e) => {
        validarTexto(e.target.value) == false ? mostrarErrores('El nombre no puede contener números.') : limpiarErrores()
    });

    document.querySelector('#inputApellido').addEventListener('keyup', (e) => {
        validarTexto(e.target.value) == false ? mostrarErrores('El apellido no puede contener números.') : limpiarErrores()
    });

    document.querySelector('#inputEmail').addEventListener('blur', (e) => {
        validarEmail(e.target.value) == false ? mostrarErrores('El email no tiene el formato esperado.') : limpiarErrores()
    });

    const pass1 = document.querySelector('#inputPassword');
    const pass2 = document.querySelector('#inputPasswordRepetida');
    const passwordInfo = document.getElementById('passwordInfo')

    pass1.addEventListener('focus', () => {
        passwordInfo.innerHTML = '<small>La contraseña tiene que tener un mínimo de 4 dígitos y, al menos, un número.</small>'
    });

    pass1.addEventListener('blur', (e) => {
        passwordInfo.innerHTML = ''
        validarContrasenias(e, pass1, pass2);
    });

    pass2.addEventListener('blur', (e) => {
        validarContrasenias(e, pass1, pass2);
    });

    

});