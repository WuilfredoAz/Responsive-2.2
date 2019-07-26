//guardamos en una variable al boton
const burguerButtom = document.querySelector(".menu-icono");

//guardamos en una variable al menu
const menu = document.querySelector(".menu");



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

//optimizando el JS para activar el menu de hamburguesa en la resolucion que es necesaria

//capturamos la resolucion
const mobile = window.matchMedia("screen and (max-width: 480px)");

//colocamos un escuchador
mobile.addListener(hideShow);

function hideShow()
{
    //si es la resolucion que necesito
    if(mobile.matches==true)
    {
        //Creamos un escuchador de eventos con la funcion que disparará
        burguerButtom.addEventListener("touchstart", mostrarMenu);
    }
    else
    {
        burguerButtom.removeEventListener("touchstart",mostrarMenu);
    }
}

hideShow(mobile);
