window.addEventListener('load', () => {
    let lista = document.querySelectorAll('li');
    lista.forEach(elemento => {
        elemento.addEventListener('click', seleccionarElemento);
    });

    this.document.querySelectorAll('img')[0].addEventListener('click', moverBajo);
    // this.document.querySelectorAll('img')[1].addEventListener('click', moverArriba);
    this.document.getElementById('imagenes').className = 'oculto';
});

function moverBajo() {
    let elementoSeleccionado = document.querySelector('.seleccionado');
    let elementoArribaSeleccionado = elementoSeleccionado.nextElementSibling.nextElementSibling;
    elementoSeleccionado.parentNode.insertBefore(elementoArribaSeleccionado, elementoSeleccionado);
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

window.addEventListener('keydown', event => {
    let tecla = event.key;
    moverElemento(tecla);
    console.log(event.key)
});

