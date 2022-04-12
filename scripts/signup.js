window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */





    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {





    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function registrarUsuario(settings) {
        // Acá llamamos a la API




    };

    document.querySelector('#inputNombre').addEventListener('blur', (e) => {
        if (validarNombreOApellido(e.target.value) == false) {
            mostrarErrores('El nombre no puede contener números ni guiones.');
        }
    });

    document.querySelector('#inputApellido').addEventListener('blur', (e) => {
        if (validarNombreOApellido(e.target.value) == false) {
            mostrarErrores('El apellido no puede contener números ni guiones.');
        }
    });

    document.querySelector('#inputEmail').addEventListener('blur', (e) => {
        console.log(e.target.value);
        if (!validarEmail(e.target.value)) {
            mostrarErrores('El email no tiene el formato esperado.');
        }
    });


    // const passwords = [document.querySelector('#inputPassword'), document.querySelector('#inputPasswordRepetida')];
    // passwords.forEach(pass => {
    //     pass.addEventListener('focus', () => {
    //         console.log('La contraseña tiene que tener un mínimo de 4 dígitos y al menos un número.');
    //     });
    // });
    const pass1 = document.querySelector('#inputPassword');
    const pass2 = document.querySelector('#inputPasswordRepetida');

    pass1.addEventListener('focus', () => {
        console.log('La contraseña tiene que tener un mínimo de 4 dígitos y al menos un número.');
    });

    pass1.addEventListener('blur', (e) => {
        validarContrasenias(e);
    });

    pass2.addEventListener('blur', (e) => {
        validarContrasenias(e);
    });

    function validarContrasenias(e) {
        let contraseniaValida = validarContrasenia(e.target.value) == false;
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
});