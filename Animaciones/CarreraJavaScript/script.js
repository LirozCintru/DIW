var corredor = document.querySelectorAll('.corredor')

var btn = document.querySelector('.btn')

var estado1 = 0;
var estado2 = 0;
var estado3 = 0;

console.log(estado1)

function onClick() {
    console.log(corredor[0]);
    console.log(corredor[1]);
    console.log(corredor[2]);

    estado1 = Math.floor(Math.random() * 11) +estado1;
    estado2 = Math.floor(Math.random() * 11) +estado2;
    estado3 = Math.floor(Math.random() * 11) +estado3;

    corredor[0].style.left=`${estado1}vw`;
    corredor[1].style.left=`${estado2}vw`;
    corredor[2].style.left=`${estado3}vw`;
    
    if(estado1 >= 80){
        corredor[0].previousElementSibling.style.opacity=1;
        btn.disabled=true;
    }
    if(estado2 >= 80){
        corredor[1].previousElementSibling.style.opacity=1;
        btn.disabled=true;
    }
    if(estado3 >= 80){
        corredor[2].previousElementSibling.style.opacity=1;
        btn.disabled=true;
    }
}
