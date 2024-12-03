var span = null;
var aciertos = 0;
var fallos = 0;

function selecionar(span) {
    span.classList.toggle('selecionado');
}

function selecionado(span2) {
    if (auxSpan == null) {
        auxSpan = span2;
    }
    else {
         if (span2.class== 'selecionado'){
            auxSpan.classList.remove('selecionado');
        }else {
             span2.classList.add('selecionado');
        }
    }
        auxSpan = null;
}