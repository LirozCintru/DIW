var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

var soundBtn = document.getElementById("soundBtn");
var soundBtn = document.getElementById("soundImg");

var videoTitle = document.getElementById("videoTitle");
var showTime = 2;

video.addEventListener("timeupdate", function() {
    if (video.currentTime >= showTime && video.currentTime < showTime + 20) {
        videoTitle.style.display = "block";
    } else {
        videoTitle.style.display = "none";
    }
});

function soundMute() {
    if (video.muted) {
        video.muted = false;
        soundImg.src = "soundB.png";
        soundImg.alt = "Sound On";
    } else {
        video.muted = true;
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