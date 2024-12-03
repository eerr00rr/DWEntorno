window.addEventListener('load', () => {
    let lista = document.querySelectorAll('li');
    lista.forEach(elemento => {
        elemento.addEventListener('click', seleccionarElemento);
    });

    this.document.querySelectorAll('img')[0].addEventListener('click', moverBajo);
    this.document.querySelectorAll('img')[1].addEventListener('click', moverArriba);
    this.document.getElementById('imagenes').className = 'oculto';
    this.document.querySelector('body').addEventListener('click', deseleccionar);
});

function deseleccionar(e) {
    if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'IMG') {
        let seleccionado = document.querySelector('.seleccionado');
        seleccionado.className = '';

        let imagenes = document.querySelector('#imagenes');
        imagenes.className = 'oculto';
    }
}

window.addEventListener('keydown', event => {
    let tecla = event.key;
    if (tecla === 'ArrowUp') {
        moverArriba();
    }
    if (tecla === 'ArrowDown') {
        moverBajo();
    }
});


function moverArriba() {
    let elementoSeleccionado = document.querySelector('.seleccionado');
    let elementoArribaSeleccionado = elementoSeleccionado.nextElementSibling.nextElementSibling;
    let elementoAbajoSeleccionado = elementoSeleccionado.previousElementSibling;
    if (elementoAbajoSeleccionado) {
        elementoSeleccionado.parentNode.insertBefore(elementoAbajoSeleccionado, elementoArribaSeleccionado);
    } else {
        elementoSeleccionado.parentNode.insertBefore(elementoSeleccionado, elementoSeleccionado.parentNode.lastElementChild);
        elementoSeleccionado.parentNode.insertBefore(document.querySelector('#imagenes'), elementoSeleccionado.nextElementSibling);
        moverBajo();
    }
}

function moverBajo() {
    let elementoSeleccionado = document.querySelector('.seleccionado');
    let elementoArribaSeleccionado = elementoSeleccionado.nextElementSibling.nextElementSibling;
    if (elementoArribaSeleccionado) {
        elementoSeleccionado.parentNode.insertBefore(elementoArribaSeleccionado, elementoSeleccionado);
    } else {
        elementoSeleccionado.parentNode.insertBefore(elementoSeleccionado, elementoSeleccionado.parentNode.firstChild);
        elementoSeleccionado.parentNode.insertBefore(document.querySelector('#imagenes'), elementoSeleccionado.nextElementSibling);
    }
}

function seleccionarElemento(event) {
    document.querySelectorAll('li').forEach(element => {
        if (element.classList.contains('seleccionado')) {
            element.classList.remove('seleccionado');
        }
    });
    event.target.className = 'seleccionado';

    document.getElementById('imagenes').className = '';
    let imagenes = document.getElementById('imagenes');
    let sig = document.getElementsByClassName('seleccionado')[0].nextElementSibling;
    if (sig) {
        sig.parentNode.insertBefore(imagenes, sig);
    } else {
        document.querySelector('ul').appendChild(imagenes);
    }
}
