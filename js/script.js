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

//añadimos el lazy loading a las imagenes
var bLazy = new Blazy({
    selector: 'img'
});

//Activamos los gestos

//Colocamos en una variable a quien queremos que este pendiente de los gestos
const body = document.body;

//cremos una variable para pasar por parametros a el body a la libreria
const gestos = new Hammer(body);

//colocamos un escuchador de eventos de HammerJS para cuando haga swipe a la derecha y muestre el menu
gestos.on("swiperight", muestrame);

//colacamos un escuchador de eventos de HammerJS para cuando haga swipe a la izquierda y oculte el menu
gestos.on("swipeleft", ocultame);

//creamos la funcion para mostrar el menu
function muestrame()
{
    menu.classList.add("is-active");
    burguerButtom.classList.add("icon-cancel-circle");
}

//creamos la funcion para ocultar el menu
function ocultame()
{
    menu.classList.remove("is-active");
    burguerButtom.classList.remove("icon-cancel-circle");
}