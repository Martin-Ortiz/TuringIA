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