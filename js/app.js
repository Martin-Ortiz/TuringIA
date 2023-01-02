/**Link de redes sociales - encabezado */

const linkedIn = document.getElementById('imgLinkedin');
linkedIn.addEventListener('click', function (event) {
    redireccionarLink('https://mx.linkedin.com/company/turing-inteligencia-artificial')
});

const instagram = document.getElementById('imgInstagram');
instagram.addEventListener('click', function (event) {
    redireccionarLink('https://www.instagram.com/ia_turing/')
});

const twitter = document.getElementById('imgTwitter');
twitter.addEventListener('click', function (event) {
    redireccionarLink('https://twitter.com/IaTuring')
});

const facebook = document.getElementById('ImgFacebook');
facebook.addEventListener('click', function (event) {
    redireccionarLink('https://web.facebook.com/people/Turing-Inteligencia-Artificial/100072141934213/')
});


/**Link de redes sociales - Pie de página */

const linkedIn1 = document.getElementById('imgLinkedin1');
linkedIn1.addEventListener('click', function (event) {
    redireccionarLink('https://mx.linkedin.com/company/turing-inteligencia-artificial')
});

const instagram1 = document.getElementById('imgInstagram1');
instagram1.addEventListener('click', function (event) {
    redireccionarLink('https://www.instagram.com/ia_turing/')
});

const twitter1 = document.getElementById('imgTwitter1');
twitter1.addEventListener('click', function (event) {
    redireccionarLink('https://twitter.com/IaTuring')
});

const facebook1 = document.getElementById('ImgFacebook1');
facebook1.addEventListener('click', function (event) {
    redireccionarLink('https://web.facebook.com/people/Turing-Inteligencia-Artificial/100072141934213/')
});

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
/**Funcion para mostrar y ocultar menu */
const menu = document.querySelector(".img-menu");
const opcionesMenu = document.getElementById("opcionesMenu");

menu.addEventListener('click', function(event){
    mostrarMenu();
})

function mostrarMenu(){
    if (opcionesMenu.classList.contains("ocultar")) {
        opcionesMenu.classList.remove("ocultar")
    } else {
        opcionesMenu.classList.add("ocultar")
    }
}

//funcion para redireccionar hacia un link
function redireccionarLink(link) {
    return window.location.assign(link);

}