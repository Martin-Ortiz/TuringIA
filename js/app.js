/**Link de Servicios */
var menuServicios = document.getElementById("menu-servicios");

menuServicios.addEventListener('change', function(event){
        seleccionServicios();
    
});

function seleccionServicios(){
    var rutaActual = window.location.pathname;
    var ruta = "";
    if(rutaActual.includes("servicios/")){
        ruta = ""
    }else if(rutaActual.includes("tableau/")){
        ruta = "../servicios/"
    }else{
        ruta = "servicios/"
    }

    var seleccion = menuServicios.options[menuServicios.selectedIndex].text;
    switch (seleccion){
        case 'Servicios':
            redireccionarLink(ruta +'servicios.html');
            break;
        case 'Business Analyst':
                redireccionarLink(ruta + 'ba.html');
            break;
        case 'Workshop':
            redireccionarLink(ruta + 'workshop.html');
            break;
        case 'Capacitacion':
                redireccionarLink(ruta + 'capacitacion.html');
            break;
        case 'Venta de Software':
            redireccionarLink(ruta + 'vsoftware.html');
            break;
        case 'Hardware':
            redireccionarLink(ruta + 'hardware.html');
            break;
        case 'Desarrollo de Software':
            redireccionarLink(ruta + 'dsoftware.html');
            break;
        case 'Balanced Scorecard':
            redireccionarLink(ruta + 'bs.html');
            break;

    }
}

/**Link de Tableau */
var menuTableau = document.getElementById("Tableau");

menuTableau.addEventListener('change', function(event){
    seleccionServiciosT();
});

function seleccionServiciosT(){
    var rutaActualT = window.location.pathname;
    var rutaT = "";
    if(rutaActualT.includes("tableau/")){
        rutaT = ""
    }else if(rutaActualT.includes("servicios/")){
        rutaT = "../tableau/"
    }else{
        rutaT = "tableau/"
    }

    var seleccionT = menuTableau.options[menuTableau.selectedIndex].text;
    switch (seleccionT){
        case 'Tableau':
                if(rutaT=="../tableau/"){
                    rutaT = "../"
                }
                redireccionarLink(rutaT + 'tableau.html');
            break;
        case 'Desktop':
            redireccionarLink(rutaT + 'desktop.html');
            break;
        case 'Prep':
                redireccionarLink(rutaT + 'prep.html');
            break;
        case 'Cloud':
            redireccionarLink(rutaT + 'cloud.html');
            break;
        case 'Server':
            redireccionarLink(rutaT + 'server.html');
            break;
        case 'Server Management':
            redireccionarLink(rutaT + 'smanagment.html');
            break;
        case 'Data Management':
            redireccionarLink(rutaT + 'dmanagment.html');
            break;

    }
}
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