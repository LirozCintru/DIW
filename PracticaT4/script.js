var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

// var soundBtn = document.getElementById("soundBtn");
// var soundBtn = document.getElementById("soundImg");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}