let enlaces = document.getElementsByTagName('a');
let parafos = document.getElementsByTagName('p');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", test);
}

function test(event) {
    let numEnlace = event.target.id.split('_').pop();

    if (event.target.textContent === 'Ocultar continguts') {
        parafos[numEnlace - 1].hidden = true;
        event.target.textContent = 'Mostrar el contenido';
    } else {
        parafos[numEnlace - 1].hidden = false;
        event.target.textContent = 'Ocultar continguts';
    }
}