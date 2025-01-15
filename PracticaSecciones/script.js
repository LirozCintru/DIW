let secciones = document.querySelectorAll("section");

secciones.forEach(seccion => {
    seccion.addEventListener("click", (ev) => {
        seccion.classList.add("is-expanded");
        secciones.forEach(element => {
            if(element!=seccion){
                element.classList.add("not-expanded");
            }
        });
        let x = seccion.getElementsByClassName("cerral");
        let elemento = x[0];
        elemento.addEventListener("click", (ev) => {
            ev.stopPropagation();
            seccion.classList.remove("is-expanded");
            secciones.forEach(element => {
                if(element!=seccion){
                    element.classList.remove("not-expanded");
                }
            });
        });
    });
});