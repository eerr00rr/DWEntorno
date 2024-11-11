const TIME_START = new Date();
let aux;
let arrayImagenes = [];
let posBlanco;

function arrayInit() {
    for (let i = 0; i < 16; i++) {
        console.log(i);
        arrayImagenes[i] = `${i + 1}.gif`;
    }
    arrayImagenes[15] = "blanco.gif";
    posBlanco = 15;
}

function events()

arrayInit();
