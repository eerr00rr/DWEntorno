const size = 4;
let vacio;
let puzzle = generarPuzzle();

function generarPuzzle() {
    const matrix = new Set();
    while (matrix.size < 16) {
        matrix.add(Math.floor(Math.random() * 16) + 1);
    }
    return Array.from(matrix);
}

function adyacente(clicado, vacio) {
    let idVacio = Number(vacio.substring(3));
    let idClicado = Number(clicado.substring(3));

    let arriba = (idVacio - 4 === idClicado) ? true : false;
    let abajo = (idVacio + 4 === idClicado) ? true : false; 

    let primerColumna = (idVacio % 4 === 1) ? true : false;
    let ultimaColumna = (idVacio % 4 === 0) ? true : false;
    let izquierda = (!primerColumna && idVacio - 1 === idClicado) ? true : false;
    let derecha = (!ultimaColumna && idVacio + 1 === idClicado) ? true : false;

    return arriba || abajo || izquierda || derecha ? true : false;
}

function cambiarImagen(id1, id2) {
    let img1 = document.querySelector(`#${id1} img`);
    let img2 = document.querySelector(`#${id2} img`);

    let temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
    vacio = id1;
}

function comprobar() {
    let correctas = 0;
    const cells = document.querySelectorAll('td');

    cells.forEach((cell) => {
        const td = Number(cell.id.substring(3));
        const img = cell.querySelector("img");
        const numero = (img.src.substring(54, 55));

        if (td === numero) {
            correctas++;
        }
    });

    if (correctas === 15) {
        alert("has ganado");
    }
}

function crearTabla(puzzle) {
    let tabla = document.createElement('table');
    let id = 1;
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        tabla.appendChild(tr);
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);

            let imagen = document.createElement('img');
            td.appendChild(imagen);

            let valor = puzzle[i * size + j];

            td.id = `td_${id}`;
            id++;
            if (valor === 16) {
                vacio = td.id; 
                imagen.src = `imagenes/blanco.gif`; 
            } else {
                imagen.src = `imagenes/${valor}.gif`;
            }

            imagen.width = 100;

            imagen.onclick = () => {
                if (adyacente(td.id, vacio)) {
                    cambiarImagen(td.id, vacio);
                    comprobar();
                }
            };
        }
    }
    document.body.appendChild(tabla);
}

function init() {
    crearTabla(puzzle);
}

init();