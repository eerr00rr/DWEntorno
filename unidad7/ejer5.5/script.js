const formulario = document.querySelector('#registro');
const nombre = formulario.elements['nombre'];
const edad = formulario.elements['edad'];
const dni = formulario.elements['dni'];
const letradni = formulario.elements['letradni'];
const direccion = formulario.elements['direccion'];
const provincia = formulario.elements['provincia'];
const localidad = formulario.elements['localidad'];
const codigopostal = formulario.elements['codigopostal'];
const telefono = formulario.elements['telefono'];
const email = formulario.elements['email'];
const repeatemail = formulario.elements['repeatemail'];

const camposObligatorios = [nombre, direccion, codigopostal];
camposObligatorios.forEach(value => {
    value.addEventListener('blur', obligatoryMessage);
});

function obligatoryMessage(e) {
    let span;
    let inputName = e.target.name;

    if (spanExists(e.target.nextElementSibling)) {
        span = e.target.nextElementSibling;
    } else {
        span = document.createElement('span');
    }
    if (e.target.value.trim() === '') {
        span.textContent = `    El campo ${inputName} es obligatory`;
        formulario.appendChild(span);
        formulario.elements[0].insertBefore(span, e.target.nextElementSibling);
    } else {
        span.remove();
    }
}

function spanExists(element) {
    return element.nodeName === 'SPAN' ? true : false;
}

const limpiar = document.querySelector('#limpiar').addEventListener('click', e => {
    formulario.reset();
});