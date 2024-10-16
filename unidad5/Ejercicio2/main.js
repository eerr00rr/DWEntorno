cambiarImagen();

function cambiarImagen() {
    let imagenAleatorio = Math.floor(Math.random() * 15) + 1 + '.gif';
    document.getElementsByTagName('img')[0].src = `../ArchivosEjercicios/imagenes/${imagenAleatorio}`;
}