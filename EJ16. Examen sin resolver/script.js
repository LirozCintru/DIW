var copos = document.getElementsByClassName(".copos");

function nevar() {
    nevar2();
    sonido();
    setTimeout(eliminar, 10000);
}

function nevar2() {
    const elemento = document.querySelector('.copos');
    console.log(elemento);
    elemento.classList.add('nieva');
}

function eliminar() {
    const elemento = document.querySelector('.copos');
    elemento.classList.remove('nieva')
    console.log("Eliminado");
}

function sonido() {
    var audio = document.getElementsByTagName('audio');
    console.log(audio);
    audio.play();

}