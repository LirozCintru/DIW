var objetosIniciales = ['Bastón de caramelo', 'Bolas navideñas', 'Calcetín', 'Copo de nieve', 'Galleta de gengibre', 'Malvaviscos', 'Muérdago', 'Muñeco de nieve', 'Regalos', 'Reno'];
var objetosAleatorios;

// Elementos HTML
var tapar = document.getElementById("telon");
var btn = document.getElementById("btn");
var audio_acierto = document.getElementById("audio_acierto");
var audio_error = document.getElementById("audio_error");
var search = document.querySelector(".search");
var acierto = document.querySelector(".aciertos");
var error = document.querySelector(".errores");

// Variables auxiliares
var buscado;
var acierto_cont = 0;
var erorr_cont = 0;


function iniciarJuego() {

    tapar.classList.add('mostrar');
    objetosAleatorios = ordenAleatorio();
    btn.innerHTML = "Reiniciar juego";
    acierto_cont = 0;
    erorr_cont = 0;
    acierto.innerHTML = acierto_cont;
    error.innerHTML = erorr_cont;

    const hijosMain = document.querySelectorAll('main > img');

    // Eliminar la clase a cada hijo
    hijosMain.forEach(hijo => {
        hijo.classList.remove('acierto'); // Reemplaza 'nueva-clase' por el nombre de la clase que quieras añadir
    });

    nuevoObjeto();
    
}

function nuevoObjeto() {
    if(objetosAleatorios.length != 0) {
        //objetosAleatorios.splice(1, 1); // Devuelve un array con el elemento eliminado
        buscado = objetosAleatorios.shift(); // Elimina y devuelve el primer elemento del array
        search.innerHTML = buscado;
    }
    else {
        search.innerHTML = "¡HAS GANADO!";
        tapar.classList.remove('mostrar');
    }

}


function intento(objeto){

    const name = objeto.getAttribute("name");

    if (name == buscado) {
        audio_acierto.play();
        acierto_cont++;
        acierto.innerHTML = acierto_cont;
        objeto.classList.add('acierto');
        nuevoObjeto();
    }
    else {
        audio_error.play();
        erorr_cont++;
        error.innerHTML = erorr_cont;
    }

}

function ordenAleatorio() {
     // Crear una copia del array objetosIniciales
     const copia = [...objetosIniciales];

    for (let i = copia.length - 1; i > 0; i--) {
        // Generar un índice aleatorio entre 0 y i
        const j = Math.floor(Math.random() * (i + 1));

        // Intercambiar los elementos en las posiciones i y j
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

