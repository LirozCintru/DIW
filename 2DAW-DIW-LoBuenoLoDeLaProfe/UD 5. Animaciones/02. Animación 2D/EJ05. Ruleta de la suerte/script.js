var rotacionAcumulada = 0;

function girar (){
    const ruleta = document.querySelector('.ruleta img');

    // Generar un número aleatorio de vueltas (entre 1 y 6)
    const vueltas = Math.floor(Math.random() * 5) + 1;
    // console.log(vueltas);

    // Generar un número aleatorio de grados y sumarle las vueltas
    const grados = Math.floor(Math.random() * 360) + 360 * vueltas;
    // console.log(grados);

    rotacionAcumulada += grados;
    console.log(rotacionAcumulada);

    document.documentElement.style.setProperty('--rotacion', `${rotacionAcumulada}deg`); 
    
}