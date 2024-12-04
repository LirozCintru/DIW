// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Get title
var videoTitle = document.getElementById("videoTitle");

// Get the button sound
var soundBtn = document.getElementById("soundBtn");
var soundImg = document.getElementById("soundImg");

// Definir el minuto en el que quieres mostrar el texto (en segundos)
var showTime = 34;  // En este caso, el texto se muestra a los 30 segundos

// Función que se ejecuta cada vez que el tiempo del video cambia
video.addEventListener("timeupdate", function() {
    // Comprobar si el tiempo actual del video está en el rango deseado
    if (video.currentTime >= showTime && video.currentTime < showTime + 5) {
        videoTitle.style.display = "block";  // Mostrar el texto
    } else {
        videoTitle.style.display = "none";  // Ocultar el texto
    }
});


// Función para alternar el sonido
function soundMute() {
    if (video.muted) {
        video.muted = false;  // Activar sonido
        soundImg.src = "sound.png";  // Cambiar la imagen a "Sound On"
        soundImg.alt = "Sound On";  // Cambiar el texto alternativo a "Sound On"
    } else {
        video.muted = true;  // Apagar sonido
        soundImg.src = "mute.png";  // Cambiar la imagen a "Sound Off"
        soundImg.alt = "Sound Off";  // Cambiar el texto alternativo a "Sound Off"
    }
}


// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}