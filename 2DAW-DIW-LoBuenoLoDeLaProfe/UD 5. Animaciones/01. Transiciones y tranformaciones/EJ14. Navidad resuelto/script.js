function elem_visibles() {
    var elemento = document.querySelector('.hohoho');
    console.log(elemento);
    elemento.classList.toggle('hohoho_visible');

    var elemento2 = document.querySelector('.destellos');
    console.log(elemento2);
    elemento2.classList.toggle('destellos_visibles');

    if (elemento.classList.contains('hohoho_visible')) {
        var audio = document.querySelector('audio');
        audio.play();
    }
}