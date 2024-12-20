var bola = document.querySelectorAll('.bola')

// var btnR = document.querySelector('.btnRojo')
// var btnA = document.querySelector('.btnVerde')
// var btnB = document.querySelector('.btnAzul')

function onClickRojo() {

    bola.forEach(element => {
        element.style.backgroundColor = "red";
        element.style.boxShadow="0px 0px 2vw red";
    });
}
function onClickVerde() {

    bola.forEach(element => {
        element.style.backgroundColor = "#d1ff38";
        element.style.boxShadow="0px 0px 2vw green";
    });
}
function onClickAzul() {

    bola.forEach(element => {
        element.style.backgroundColor = "blue";
        element.style.boxShadow="0px 0px 2vw blue";
    });
}
