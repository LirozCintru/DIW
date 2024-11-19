var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

var videoE = document.getElementById("VideoExterno");


var soundBtn = document.getElementById("soundBtn");
var soundBtn = document.getElementById("soundImg");

function soundMute() {
    if (videoE.muted) {
        videoE.muted = false;
        soundImg.src = "soundB.png";
        soundImg.alt = "Sound On";
    } else {
        videoE.muted = true;
        soundImg.src = "muteB.png";
        soundImg.alt = "Sound Off";
    }
}

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

let player;

// Función llamada cuando la API de YouTube está lista para ser utilizada
function onYouTubeIframeAPIReady() {
    player = new YT.Player('externalVideo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Función llamada cuando el reproductor está listo
function onPlayerReady(event) {
    const soundBtn = document.getElementById('soundBtn');
    const soundImg = document.getElementById('soundImg');

    // Agregar listener al botón de mute/unmute
    soundBtn.addEventListener('click', function() {
        if (player.isMuted()) {
            player.unMute();
            soundImg.src = 'imgs/soundB.png'; // Cambia a la imagen de sonido activado
            soundImg.alt = 'Sound On';
        } else {
            player.mute();
            soundImg.src = 'imgs/muteB.png'; // Cambia a la imagen de sonido desactivado
            soundImg.alt = 'Sound Off';
        }
    });
}
