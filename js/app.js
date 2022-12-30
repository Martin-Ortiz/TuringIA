const linkInicio = '../index.html';
const linkNosostros = "componentes/nosotros.html";

const inicio =document.getElementById('menu-inicio');
inicio.addEventListener('click',redireccionarLink(linkInicio));

const nosotros = document.getElementById("menu-nosotros");
nosotros.addEventListener('click', redireccionarLink(linkNosostros));

//funcion para redireccionar
function redireccionarLink(link){
    window.location.assign(link);
}