window.addEventListener('load', function() {
/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('#loginForm');
const urlBase = 'https://ctd-todo-api.herokuapp.com/v1';
const tokenKey = 'tkn';
const submitBtn = document.querySelector('form button')



/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function(e) {
    const email = normalizarEmail(document.querySelector('#inputEmail').value)
    const password = document.querySelector('#inputPassword').value
    e.preventDefault()
    mostrarSpinner()
    if(!atLeastOneEmptyInput()){
        realizarLogin(email, password)
    } else {
        ocultarSpinner()
        alert('Por favor, completar la información solicitada')
    }    
});


/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 2: Realizar el login [POST]                    */
/* -------------------------------------------------------------------------- */


function realizarLogin(email, password) {
    const urlLogin = urlBase + '/users/login';
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    };
    
    fetch(urlLogin, settings)
    .then(response => {
        if (response.status == 400 || response.status == 404) {
            showMessage('Credenciales inválidas.');
            ocultarSpinner()
        } else if (response.status == 500) {
            showMessage('Error al conectarse con el servidor, intente mas tarde.');
            ocultarSpinner()
        } else if (response.status == 201) {
            return response.json();
        }
    })
    .then(data => {
        if (data) {
            sessionStorage.setItem(tokenKey, data.jwt);
            location.replace('mis-tareas.html');
        }
    })
    .catch((error) => {
        console.error(error)
        ocultarSpinner()
    })
};
        
    function showMessage(message) {
        alert(message);
    }

    document.querySelector('#inputEmail').addEventListener('blur', (e) => {
        validarEmail(e.target.value) == false ? mostrarErrores('El email no tiene el formato esperado.') : limpiarErrores()
    });

    form.addEventListener('change', () => {
        if(!atLeastOneEmptyInput()){
            submitBtn.disabled = false
        }
    })

})