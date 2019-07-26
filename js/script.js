//guardamos en una variable al boton
const burguerButtom = document.querySelector(".menu-icono");

//guardamos en una variable al menu
const menu = document.querySelector(".menu");

//Creamos un escuchador de eventos con la funcion que disparará
burguerButtom.addEventListener("touchstart", mostrarMenu);

//creamos la funcion que se dispara
function mostrarMenu()
{
    //si el menu esta activo
    if(menu.classList.contains("is-active"))
    {
        menu.classList.remove("is-active");
        burguerButtom.classList.remove("icon-cancel-circle");
    }
    else
    {
        menu.classList.add("is-active");
        burguerButtom.classList.add("icon-cancel-circle");
    }
}