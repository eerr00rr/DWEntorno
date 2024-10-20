const size = 4;
let tabla;
let imagenes;
let vacioX, vacioY;

function crearTabla() {
    let tabla = document.createElement('table');

    let matrix = [];
    for(let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        tabla.appendChild(tr);
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            let img = document.createElement('img');
            img.src = imagenes[i][j];
            tr.appendChild(td);
            td.appendChild(img);
            matrix[i][j] = td;
        }
    }
    document.body.appendChild(tabla);
    return matrix;
}

function mezclarImagenes() {
    let set = new Set();
    while (set.size < 16) {
        let random = Math.floor(Math.random() * 16);
        set.add(random);
    }
    let array = Array.from(set);

    
}

function crearImagenes() {
    vacioX = vacioY = size - 1;
    let matrix = [];
    counter = 1;
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            let valor = `../ArchivosEjercicios/imagenes/${counter}.gif`;
            matrix[i][j] = valor;
            counter++;
        }
    }
    matrix[vacioX][vacioY] = '../ArchivosEjercicios/imagenes/blanco.gif';
    return matrix;
}


function inicializarJuego() {
    imagenes = crearImagenes();
    tabla = crearTabla();
}

inicializarJuego();