const secciones = document.querySelectorAll("section");

console.log(secciones);

secciones.forEach((seccion, index) => {
    // Añadir un listener de clic a la sección
    seccion.addEventListener("click", () => {
        console.log(`Hiciste clic en la Sección ${index + 1}`);
        seccion.classList.add('is-expanded');

        // Añadir al resto de secciones in-not-expanded
        secciones.forEach((otraSeccion) => {
            if (otraSeccion !== seccion) {
                otraSeccion.classList.add('is-not-expanded');
            }
        });

        // Selecciona el botón de cerrar
        const cerrar = seccion.querySelector(".cerrar-seccion");
        cerrar.addEventListener("click", (event) => {
            event.stopPropagation(); // Esto previene que el clic en cerrar propague el evento al contenedor
            console.log("cerrar");
            seccion.classList.remove('is-expanded');

            // Eliminar las clases is-not-expanded
            secciones.forEach((otraSeccion) => {
                otraSeccion.classList.remove('is-not-expanded');
            });
        });
    });
});
