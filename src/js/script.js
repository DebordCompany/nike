var header_nav = document.querySelector("#header_nav");
var list = document.querySelector("#list");
var salida_menu = document.querySelector("#salida_menu");

list.addEventListener("click", desplegar);
function desplegar() {
  header_nav.classList.toggle("desplegar");
}
salida_menu.addEventListener("click", desplegar);

function remove() {
  header_nav.classList.remove("desplegar");
}

var title = document.querySelectorAll("#title");
var contenido = document.querySelectorAll("#contenido");

