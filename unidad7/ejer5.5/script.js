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

const provincias = {
    'A': ['Alicante', 'Elche', 'Benidorm'],
    'CS': ['Castellon de la Plana', 'Villareal', 'Onda'],
    'V': ['Valencia', 'Gandia', 'Alzira']
}

const elementos = [
    nombre, edad, dni,
    letradni, direccion, provincia,
    localidad, codigopostal, telefono,
    email, repeatemail
];

function hasErrors(campo, bool) {
    elementos[campo] = bool ? "Error" : "";
}

elementos.forEach(element => {
    element.addEventListener('focus', e => {
        e.target.style.backgroundColor = 'green';
        e.target.style.border = 'solid black 2px';
    });
    element.addEventListener('blur', e => {
        e.target.style.backgroundColor = 'white';
        e.target.style.border = 'solid 1px grey';
    });
});

provincia.addEventListener('change', e => {
    localidad.innerHTML = '';
    for (const key in provincias) {
        if (key === e.target.value) {
            listarLocalidades(provincias[key]);
            return;
        }
        localidad.disabled = true;
    }
});

function listarLocalidades(array) {
    localidad.disabled = false;
    array.forEach(element => {
        let option = document.createElement('option');
        option.value = element.toLowerCase();
        option.textContent = element;
        localidad.appendChild(option);
    });
}

const camposComprobar = [dni, edad, telefono, email];
formulario.addEventListener('submit', e => {
    e.preventDefault();

    let errores = {};

    camposComprobar.forEach(element => {
        let error;
        if (element.name === 'dni') {
            error = comprobarCampo(element.name, element.value.trim() + letradni.value.trim());
        } else {
            error = comprobarCampo(element.name, element.value.trim());
        }
        if (error.length !== 0) {
            errores[element.name] = error;
        }
    });
    for (const key in camposComprobar) {
        let error = comprobarCampo(key, camposComprobar[key]);
        if (error.length !== 0) {
            errores[key] = error;
        }
    }

    if (Object.keys(errores).length === 0) {
        alert('Formulario sin errores, adios');
        e.target.submit();
    } else {
        alert('Errores en los siguientes campos\n\n' + listarErrores(errores));
    }
});

function comprobarCampo(key, value) {
    switch (key) {
        case 'dni':
            regex = /^$|^\d{8}[A-Z]$/;
            break;
        case 'edad':
            regex = /^$|^(?:[1-9]|[1-9][0-9])$/;
            break;
        case 'telefono':
            regex = /^$|^\d{1,9}$/;
            break;
        case 'email':
            regex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
    }
    return regex.test(value) ? "" : `${key}: ${value}`;
}

function listarErrores(obj) {
    let str = "";
    for (const key in obj) {
        str += obj[key] + "\n";
    }
    return str;
}

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
        span.style.color = 'red';
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
    localidad.innerHTML = '';
    formulario.reset();
    nombre.focus();
});

nombre.focus();