function Posicion(imgElement, xCoord, yCoord){
    this.imgElement = imgElement;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
}

var posicion1 = new Posicion(document.getElementById('uno'), 0, 0);
var posicion2 = new Posicion(document.getElementById('dos'), 0, 1);
var posicion3 = new Posicion(document.getElementById('tres'), 0, 2);
var posicion4 = new Posicion(document.getElementById('cuatro'), 1, 0);
var posicion5 = new Posicion(document.getElementById('cinco'), 1, 1);
var posicion6 = new Posicion(document.getElementById('seis'), 1, 2);
var posicion7 = new Posicion(document.getElementById('siete'), 2, 0);
var posicion8 = new Posicion(document.getElementById('ocho'), 2, 1);
var posicion9 = new Posicion(document.getElementById('nueve'), 2, 2);

var posiciones =   [[posicion1,posicion2,posicion3],
                    [posicion4,posicion5,posicion6],
                    [posicion7,posicion8,posicion9]];

posicion1.imgElement.pos = 0;
posicion2.imgElement.pos = 1;
posicion3.imgElement.pos = 2;
posicion4.imgElement.pos = 3;
posicion5.imgElement.pos = 4;
posicion6.imgElement.pos = 5;
posicion7.imgElement.pos = 6;
posicion8.imgElement.pos = 7;
posicion9.imgElement.pos = 8;

var pop = [posicion1,posicion2,posicion3,posicion4,posicion5,posicion6,posicion7,posicion8,posicion9];

function posicionesDisponibles(){
            
    var posicionX = blanca.xCoord;     
    var posicionY = blanca.yCoord;        
    var listaDisponibles = [];

    if(posicionX==0){
        listaDisponibles.push(posiciones[posicionX+1][posicionY]);
    } else{
        if(posicionX==1){
            listaDisponibles.push(posiciones[posicionX-1][posicionY]);
            listaDisponibles.push(posiciones[posicionX+1][posicionY]);
        } else{
            listaDisponibles.push(posiciones[posicionX-1][posicionY]);
        }
    }

    if(posicionY==0){
        listaDisponibles.push(posiciones[posicionX][posicionY+1]);
    }else{
        if(posicionY==1){
                listaDisponibles.push(posiciones[posicionX][posicionY-1]);
                listaDisponibles.push(posiciones[posicionX][posicionY+1]);
        }else{
            listaDisponibles.push(posiciones[posicionX][posicionY-1]);
        }
    }

    return listaDisponibles;
}

function registrarEventosPosicionesDisponibles() {
    for(var posDispon=0;posDispon<listaDisponibles.length;posDispon++){
        registrarEventoPosicion(listaDisponibles[posDispon].imgElement);
    }
}

function registrarEventoPosicion(imgElement) {
    imgElement.addEventListener('click', clickDisponible, false);
}

function clickDisponible(event) {
    var imgClicked = event.target;
    var imgSrc = imgClicked.getAttribute('src');
    imgClicked.setAttribute('src','img/blanca.png');
    blanca.imgElement.setAttribute('src',imgSrc);
    blanca = pop[imgClicked.pos];

    borrarEventos();
}

function borrarEventos(){
    
    //borrar disponibles
    for(var count=0;count<listaDisponibles.length;count++){
        listaDisponibles[count].imgElement.removeEventListener('click', clickDisponible,false);
    }

    listaDisponibles = posicionesDisponibles();

    registrarEventosPosicionesDisponibles();
}


var blanca = posicion9;
var listaDisponibles = posicionesDisponibles();
registrarEventosPosicionesDisponibles();
