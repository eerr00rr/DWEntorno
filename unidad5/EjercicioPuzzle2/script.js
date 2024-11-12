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

function test(event) {
    console.log(event.target);
    
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