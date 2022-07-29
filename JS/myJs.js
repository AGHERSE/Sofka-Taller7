var principalEstilo = true;
var primerEstilo = false;
var segundoEstilo = false;
var tercerEstilo = false;


function appearDissapearItems(itemName){
    const descripcion = document.getElementById(itemName);
    const condicionalDesaparecer = false;
    if(descripcion.classList.contains("desaparecer")){
        descripcion.classList.remove("desaparecer");
    }
    else {
        descripcion.classList.add("desaparecer");
    }
}



function cambiarEstilo(tipoCambio){
    //El primer tipo de cambio.
    const menu = document.getElementById("Menu");
    const main = document.getElementById("main");
    const body = document.getElementById("body");
    if(principalEstilo){
        menu.classList.remove("blue-theme");
        principalEstilo = false;
    }

    if(tipoCambio == 1){
        menu.classList.add("verde-theme");
        main.classList.add("branco-theme");
        body.classList.add("branco-theme");
        primerEstilo = true;

        if (segundoEstilo){
            menu.classList.remove("vermelho-primary-theme");
            main.classList.remove("vermelho-secondary-theme");
            body.classList.remove("vermelho-secondary-theme");
            segundoEstilo = false;
        }

        if (tercerEstilo) {
            body.classList.remove("roxo-secondary-theme");
            menu.classList.remove("roxo-primary-theme");
            main.classList.remove("roxo-secondary-theme");
            tercerEstilo = false;
        }
    }

    else if (tipoCambio == 2){
        segundoEstilo = true;
        menu.classList.add("vermelho-primary-theme");
        main.classList.add("vermelho-secondary-theme");
        body.classList.add("vermelho-secondary-theme");

        if (primerEstilo){
            menu.classList.remove("verde-theme");
            main.classList.remove("branco-theme");
            body.classList.remove("branco-theme");
            primerEstilo = false;
        }

        if (tercerEstilo) {
            menu.classList.remove("roxo-primary-theme");
            main.classList.remove("roxo-secondary-theme");
            body.classList.remove("roxo-secondary-theme");
            tercerEstilo = false;
        }

    }

    else if(tipoCambio == 3){
        tercerEstilo = true;
        menu.classList.add("roxo-primary-theme");
        main.classList.add("roxo-secondary-theme");
        body.classList.add("roxo-secondary-theme");

        if (primerEstilo){
            menu.classList.remove("verde-theme");
            body.classList.remove("branco-theme");
            primerEstilo = false;
        }

        if (segundoEstilo) {
            main.classList.remove("vermelho-secondary-theme");
            menu.classList.remove("vermelho-primary-theme")
            body.classList.remove("vermelho-secondary-theme");
            segundoEstilo = false;
        }
    }
}