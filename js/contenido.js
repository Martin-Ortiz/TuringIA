//Boton mas informacion
const btnInformacion = document.getElementById("btn-informacion");
btnInformacion.addEventListener('click', function(event){
    redireccionarLink("servicios.html")
})

//Validacion de formulario de contacto
var validarEnviar = false;
const nombre = document.getElementById('nombre');
const correo = document.getElementById('email');
const numTelefono = document.getElementById('numTelefono');

nombre.addEventListener('blur', function (event) {
    validarNombre();
});

correo.addEventListener('blur', function (event) {
    validarCorreo();
});

numTelefono.addEventListener('blur', function (event) {
    validarTelefono();
});

//funcion para validar nombre 

function validarNombre() {
    var eRegNombre = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
    const spNombre = document.getElementById('spNombre');

    if (eRegNombre.test(nombre.value)) {
        spNombre.textContent = "";
        validarEnviar=true;
    } else {
        spNombre.textContent = "Ingrese un nombre valido";
        validarEnviar=false;
    }
    activarEnviar(validarEnviar);
}

/*Validacion de correo electronico */

function validarCorreo() {
    var eRegCorreo = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    const spCorreo = document.getElementById('spCorreo');

    if (eRegCorreo.test(correo.value)) {
        spCorreo.textContent = "";
        validarEnviar=true;
    } else {
        spCorreo.textContent = "Ingrese un email valido 'correo@example.com'";
        validarEnviar=false;
    }
    activarEnviar(validarEnviar);
}

/* Funcion para validar numero de telefono */
function validarTelefono() {
    var eRegTelefono = new RegExp("^[0-9]{10}$");
    const spTelefono = document.getElementById('spTelefono');

    if (eRegTelefono.test(numTelefono.value)) {
        spTelefono.textContent = "";
        validarEnviar=true;
    } else {
        spTelefono.textContent = "Ingresa un telefono valido 10 dig.";
        validarEnviar=false;
    }
    activarEnviar(validarEnviar);
}

/*Funcion para activar boton enviar*/
const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.disabled = true;
btnEnviar.classList.add("inactivo")


function activarEnviar(validarEnviar) {
    
    if (validarEnviar) {
        btnEnviar.disabled = false;
        if(btnEnviar.classList.contains("inactivo")){
            btnEnviar.classList.remove("inactivo")
        }
    } else {
        btnEnviar.disabled = true;
        if(!btnEnviar.classList.contains("inactivo")){
            btnEnviar.classList.add("inactivo")
        }
    }
}