var carta = null;

function girarCarta(cartaGirada) {
    // if (!cartaGirada.classList.contains('girada')) {
    //     cartaGirada.classList.add('girada');
    //     setTimeout(compararCarta, 1000, cartaGirada);
    // }
        cartaGirada.classList.toggle('girada');
        setTimeout(compararCarta, 1000, cartaGirada);

}

function compararCarta(cartaDos) {

    if(carta == null) {
        carta = cartaDos;
        console.log("Guardo carta");
        return;
    }
    /* cartaDos.id */
    /* cartaDos.attributes['name'].value */

    if (cartaDos.id == carta.id) {
        console.log("Son iguales");
    }
    else {
        console.log("Son distintas");
        carta.classList.remove('girada');
        cartaDos.classList.remove('girada');
    }
    carta = null;

}