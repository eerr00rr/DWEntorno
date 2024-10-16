let imagenes = document.getElementsByTagName('img');

function generarImagenes() {
    let imagen1 = Math.floor(Math.random() * 15) + 1;
    let imagen2 = Math.floor(Math.random() * 15) + 1;
    let imagen3;

    if (imagen1 > imagen2) {
        imagen3 = imagen1;
    } else if (imagen2 > imagen1) {
        imagen3 = imagen2
    } else {
        imagen3 = imagen1;
    }
    
    imagenes[0].src = `../ArchivosEjercicios/imagenes/${imagen1}.gif`;
    imagenes[1].src = `../ArchivosEjercicios/imagenes/${imagen2}.gif`;
    imagenes[2].src = `../ArchivosEjercicios/imagenes/${imagen3}.gif`;
}