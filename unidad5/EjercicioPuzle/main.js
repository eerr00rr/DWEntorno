function mezclarImagenes() {
    let set = new Set();
    while (set.size < 16) {
        let random = Math.floor(Math.random() * 16) + 1;
        set.add(random);
    }
    return set;
}

function getAdjacent(idVacio) {
    let poisciones = {
        'arriba': `td_${idVacio - 4}`,
        'abajo': `td_${idVacio + 4}`,
        'izquierda': `td_${idVacio - 1}`,
        'derecho': `td_${idVacio + 1}`,
    }

    for (const key in poisciones) {
        if (condition) {
            
        }
    }
}

function crearTabla() {
    let tabla = document.createElement('table');

    let filas = 4;
    let columnas = 4;

    let imagenesMezcladas = Array.from(mezclarImagenes());
    for (let fila = 0; fila < filas; fila++) {
        let tr = document.createElement('tr');

        for (let columna = 0; columna < columnas; columna++) {
            let td = document.createElement('td');
            let imagen = document.createElement('img');

            let valor = imagenesMezcladas[fila * 4 + columna];
            td.id = `td_${valor}`;
            if (valor === 16) {
                imagen.src = '../ArchivosEjercicios/imagenes/blanco.gif';
                idVacio = td.id;
            } else {
                imagen.src = `../ArchivosEjercicios/imagenes/${valor}.gif`;
            }
            imagen.width = 100;

            imagen.onclick = () => {
                if (td.id === getAdjacent(idVacio)) {
                    
                }
            };

            td.appendChild(imagen);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
}

let idVacio;
crearTabla();
