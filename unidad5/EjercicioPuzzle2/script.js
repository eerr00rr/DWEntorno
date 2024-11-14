const TIME_START = new Date();
const CELLS = 16;
let aux;
let arrayImagenes = [];
let posBlanco;

function draw() {
    for (let i = 0; i < 16; i++) {
        let td = document.getElementById(i + 1);
        let img = td.querySelector('img');

        img.src = `imagenes/${arrayImagenes[i]}`;
        if (arrayImagenes[i] === 'blanco.gif') {
            posBlanco = i;
        }
    }
}

function generarPuzzle() {
    for (let i = 0; i < CELLS; i++) {
        let random = Math.floor(Math.random() * 16);

        aux = arrayImagenes[i];
        arrayImagenes[i] = arrayImagenes[random];
        arrayImagenes[random] = aux;
    }
}

function arrayInit() {
    for (let i = 0; i < CELLS; i++) {
        arrayImagenes[i] = `${i + 1}.gif`;
    }
    arrayImagenes[15] = "blanco.gif";
    posBlanco = 15;
}

function mover(event) {
    let imagenClicado = event.target.src;
    let imagenSrc = imagenClicado.split('/').pop();

    let posImagenClicado = arrayImagenes.indexOf(imagenSrc);

    let izquierdo = !(posBlanco + 1 % 4 === 1) && posBlanco - 1 === posImagenClicado;
    let derecho = !(posBlanco + 1 % 4 === 0) && posBlanco + 1 === posImagenClicado;
    let arriba = posBlanco - 4 === posImagenClicado;
    let abajo = posBlanco + 4 === posImagenClicado;
    
    if (izquierdo || derecho || arriba || abajo) {
        aux = arrayImagenes[posImagenClicado];
        arrayImagenes[posImagenClicado] = arrayImagenes[posBlanco];
        arrayImagenes[posBlanco] = aux;
        draw();
    }
}

function init() {
    arrayInit();
    generarPuzzle();
    draw();
    for (let i = 0; i < CELLS; i++) {
        let td = document.getElementById(`${i + 1}`);
        td.addEventListener('click', mover);
    }
}

window.addEventListener('load', init);