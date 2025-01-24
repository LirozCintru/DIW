// Selecciona todos los elementos con la clase .caracol
const caracoles = document.querySelectorAll('.caracol');
const boton = document.querySelector('button');
var porcentaje1 = 0;
var porcentaje2 = 0;
var porcentaje3 = 0;

function moverCaracol() {

    const aleatorio = Math.floor(Math.random() * 2);

    const caracolAleatorio = caracoles[aleatorio];

    // Genera un porcentaje aleatorio entre 0 y 100
    porcentaje1 += Math.random() * 10;
    console.log(porcentaje1);
    porcentaje2 += Math.random() * 10;
    console.log(porcentaje2);
    porcentaje3 += Math.random() * 10;
    console.log(porcentaje3);
    caracoles[0].style.left = `${porcentaje1}vw`;
    caracoles[1].style.left = `${porcentaje2}vw`;
    caracoles[2].style.left = `${porcentaje3}vw`;

    if(porcentaje1 >= 80) {
        caracoles[0].previousElementSibling.style.opacity = 1;
        boton.disabled = true;
    }
    if(porcentaje2 >= 80) {
        caracoles[1].previousElementSibling.style.opacity = 1;
        boton.disabled = true;
    }
    if(porcentaje3 >= 80) {
        caracoles[2].previousElementSibling.style.opacity = 1;
        boton.disabled = true;
    }

    // Contemplar si dos o mas suman mas de 80 cuál ha sumado más
}
