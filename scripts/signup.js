window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */


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
        atLeastOneEmptyInput() == false ? registrarUsuario(firstName, lastName, email, password) : alert('Existen 1 o más campos vacíos')
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function registrarUsuario(firstName, lastName, email, password) {
        const urlLogin = apiBaseUrl + '/users'
        const settings = {
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        fetch(urlLogin, settings)
        .then(response => {
            if(response.status == 400){
                alert('Inválido')
            } else if (response.status == 500) {
                alert('Error al conectarse con el servidor')
            } else if (response.status == 201) {
                alert('Usuario creado satisfactoriamente!')
                return response.json()
            }
        })
        .then(data => {
            if(data) {
                sessionStorage.setItem(tokenKey, data.jwt)
                location.replace('mis-tareas.html')
            }
        })

    };

    document.querySelector('#inputNombre').addEventListener('keyup', (e) => {
        validarTexto(e.target.value) == false ? mostrarErrores('El nombre no puede contener números.') : limpiarErrores()
    });

    document.querySelector('#inputApellido').addEventListener('keyup', (e) => {
        if(validarTexto(e.target.value) == false){
            mostrarErrores('El apellido no puede contener números.')
        } else {
            limpiarErrores()
        }
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