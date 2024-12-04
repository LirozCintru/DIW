var btn = document.getElementById("boton1");

function mover() {
    const caja = document.querySelector('.imgTrineo');
    caja.classList.toggle('mover');
    myFunction();
}

function myFunction() {
    if (btn.textContent=="Encender") {
        btn.innerHTML = "Apagar";
    } else {
        btn.innerHTML = "Encender";
    }
}

// function rotate2DCaja() {
//     //Seleciona el primer div con la clase "caja"
//     const caja = document.querySelector('.caja');
//     //Alterna la clase 'caja-trans' en el div
//     caja.classList.toggle('caja-rot2d');

//     const img = document.querySelector('.img');
//     img.classList.toggle('img-rot2d');

// }

