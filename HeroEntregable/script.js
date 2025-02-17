function cambiarDiapositiva(indice) {
    const diapositivas = document.querySelectorAll('.diapositiva');
    const botones = document.querySelectorAll('.botones button');
    const diapositivaActual = document.querySelector('.diapositiva.activa');
    const nuevaDiapositiva = diapositivas[indice];

    if (diapositivaActual === nuevaDiapositiva) {
        return;
    }

    // ani salida
    const imagenActual = diapositivaActual.querySelector('img');
    const nuevaImagen = nuevaDiapositiva.querySelector('img');
    const textoActual = diapositivaActual.querySelector('.texto');
    const nuevoTexto = nuevaDiapositiva.querySelector('.texto');
    const fondoActual = diapositivaActual;
    const nuevoFondo = nuevaDiapositiva;

    //  imagenes random ocultas la primera vez
    const imagenesFlotantes = nuevaDiapositiva.querySelectorAll('.flotante');
    imagenesFlotantes.forEach(img => {
        if (!img.classList.contains('oculto')) {
            img.classList.add('oculto');
        }
    });

    animarImagenesFlotantesSalida(diapositivaActual);

    // Resetear clases previas
    textoActual.classList.remove('texto-entra-arriba', 'texto-sale-izquierda', 'oculto');
    imagenActual.classList.remove('imagen-entra-abajo', 'imagen-sale-derecha', 'oculto');
    nuevoTexto.classList.remove('texto-entra-arriba', 'texto-sale-izquierda', 'oculto');
    nuevaImagen.classList.remove('imagen-entra-abajo', 'imagen-sale-derecha', 'oculto');

    textoActual.classList.add('texto-sale-izquierda');
    imagenActual.classList.add('imagen-sale-derecha');
    fondoActual.classList.add('desaparece');

    //cambio de fondo
    nuevoFondo.classList.add('aparece');
    nuevoFondo.style.opacity = "1";
    nuevoFondo.style.zIndex = "2";

    setTimeout(() => {
        // Resetear estado diapositiva actual
        diapositivaActual.classList.remove('activa', 'desaparece');
        fondoActual.style.opacity = "0";
        fondoActual.style.zIndex = "0";

        // Ocultar el texto e imagen
        textoActual.classList.add('oculto');
        imagenActual.classList.add('oculto');

        // Resetear nueva diapositiva 
        nuevaDiapositiva.classList.remove('aparece');
        nuevoTexto.classList.add('oculto');
        nuevaImagen.classList.add('oculto');

        // nueva diapositiva y aplicar la animación de entrada
        nuevaDiapositiva.classList.add('activa');
        setTimeout(() => {
            nuevoTexto.classList.remove('oculto');
            nuevoTexto.classList.add('texto-entra-arriba');
            nuevaImagen.classList.remove('oculto');
            nuevaImagen.classList.add('imagen-entra-abajo');

            nuevoFondo.classList.remove('aparece');
            nuevoFondo.style.zIndex = "1";
        }, 50);

        animarImagenesFlotantesEntrada(nuevaDiapositiva);
    }, 500);

    // botones
    botones.forEach((btn, i) => {
        btn.classList.toggle('activo', i === indice);
    });
}

function animarImagenesFlotantesSalida(diapositiva) {
    const imagenesFlotantes = diapositiva.querySelectorAll('.flotante');
    imagenesFlotantes.forEach(img => {
        img.classList.add('sale');
    });

    setTimeout(() => {
        imagenesFlotantes.forEach(img => {
            img.classList.remove('sale');
            img.classList.add('oculto');
        });
    }, 1000); // imágenes reseteo
}

function animarImagenesFlotantesEntrada(diapositiva) {
    const imagenesFlotantes = diapositiva.querySelectorAll('.flotante');
    setTimeout(() => {
        imagenesFlotantes.forEach(img => {
            img.classList.remove('oculto');
            img.classList.add('entra');
            setTimeout(() => img.classList.remove('entra'), 1200);
        });
    }, 200);
}