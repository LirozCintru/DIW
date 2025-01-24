var elemento = document.querySelector('.copos');
var audio = document.querySelector('audio');

function nevar() {
    console.log(elemento);
    audio.play();
    elemento.classList.add('copos_nevando');

    setTimeout(eliminarclase,10000);

}

function eliminarclase() {
    elemento.classList.remove('copos_nevando');
    console.log(elemento);
}