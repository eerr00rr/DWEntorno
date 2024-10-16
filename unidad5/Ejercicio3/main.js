let posicion = 1;
document.getElementsByTagName('img')[0].src = `../ArchivosEjercicios/imagenes/${posicion}.gif`;

function siguiente() {
    if (posicion !== 15) {
        posicion++;
    }
    document.getElementsByTagName('img')[0].src = `../ArchivosEjercicios/imagenes/${posicion}.gif`;
}

function anterior() {
    if (posicion !== 1) {
        posicion--;
    }
    document.getElementsByTagName('img')[0].src = `../ArchivosEjercicios/imagenes/${posicion}.gif`;
}