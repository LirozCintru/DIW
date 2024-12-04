var destellos = document.getElementsByClassName("destellos");

function elem_visibles() {

    const destello = document.querySelector('.destellos');
    destello.classList.toggle('destellosquitar');

    const hoho = document.querySelector('.hohoho');
    hoho.classList.toggle('hohohoquitar');

    soundMute();
}

var audio = document.getElementsByTagName('audio');
console.log(audio);

function soundMute() {
    if (audio.muted) {
        audio.muted = false;
        audio.src = "soundB.png";
    } else {
        audio.muted = true;
        audio.src = "muteB.png";
    }
}