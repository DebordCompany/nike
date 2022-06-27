var header_nav = document.querySelector("#header_nav");
var list = document.querySelector("#list");

list.addEventListener("click", desplegar);
function desplegar() {
  header_nav.classList.toggle("desplegar");
}
