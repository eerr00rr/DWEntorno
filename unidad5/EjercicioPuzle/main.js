let tabla = document.createElement('table');

let filas = 4;
let columnas = 4;

for (let fila = 1; fila <= filas; fila++) {
    let tr = document.createElement('tr');

    for (let columna = 1; columna <= columnas; columna++) {
        let td = document.createElement('td');

        let imagen = document.createElement('img');
        imagen.src = columna * fila === 16 ? '' : `../ArchivosEjercicios/imagenes/${columna * fila}.gif`;

        td.appendChild(imagen);
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
