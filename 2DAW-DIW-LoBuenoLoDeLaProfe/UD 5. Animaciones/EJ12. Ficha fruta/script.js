var unidades = document.getElementById('unidades');
var contador = 1;
var precio = document.getElementById('precioFinal');
var opcionPrev = null;
var tam = null;

function cambiarUnidades(operacion){
    console.log(operacion.id);
    if(contador > 0) {
        if(operacion.id == "+"){
            contador ++;
        } else if(contador!=1) {
            contador --;
        }
        console.log(contador);
        unidades.value = contador;
        recalcularPrecio();
    }
}

function recalcularPrecio(){
    if(tam == "peq") {
        precio.innerHTML = contador*5;
    } else if (tam == "med") {
        precio.innerHTML = contador*10;
    } else {
        precio.innerHTML = contador*15;
    }
    
}

function elegirOpcion(opcion){
    if (opcionPrev != null) {
        opcionPrev.classList.remove('seleccionado');
    }
    opcion.classList.toggle('seleccionado');

    tam = opcion.id;

    opcionPrev = opcion;

    recalcularPrecio();
}