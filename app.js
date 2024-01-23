//let titulo = document.querySelector('h1')
//let parrafo = document.querySelector('p');

//parrafo.innerHTML = 'Indica un numero del 1 al 10';
//titulo.innerHTML = 'Juego del Numero Secreto';

let numeroSecreto = 0  ;
let numeroIntentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }

   
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
   
}

function reiniciarJuego(){
    limpiarCaja();    
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() {
    //si el numero generdado esta incluido en la lista
    let numeroGenerado =  Math.floor(Math.random()* numeroMaximo) + 1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
                listaNumerosSorteados.push(numeroGenerado)
                return numeroGenerado;
        }
    }

 
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto :o');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);   
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    console.log(numeroSecreto);

}


condicionesIniciales();
