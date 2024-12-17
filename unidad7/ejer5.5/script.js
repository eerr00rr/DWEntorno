const formulario = document.querySelector('#registro');
const { nombre, edad, dni, letradni, direccion, provincia, localidad, codigopostal, telefono, email, repeatemail } = formulario.elements;

const camposObligatorios = [nombre, direccion, codigopostal];
const camposRegex = [dni, letradni, edad, telefono, email];
const camposNumeros = [dni, edad, codigopostal, telefono];
const elementos = [nombre, edad, dni, letradni, direccion, provincia, localidad, codigopostal, telefono, email, repeatemail];

const provincias = {
    'A': ['Alicante', 'Elche', 'Benidorm'],
    'CS': ['Castellon de la Plana', 'Villareal', 'Onda'],
    'V': ['Valencia', 'Gandia', 'Alzira']
};

const divErrores = document.createElement('div');
document.body.appendChild(divErrores);

camposNumeros.forEach(field => {
    field.addEventListener('keypress', (e) => {
        if (!Number.parseInt(e.key)) {
            e.preventDefault();
        }
    });
});

camposObligatorios.forEach(field => {
    field.addEventListener('blur', obligatoryMessage);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let errores = {};

    camposRegex.forEach(field => {
        const error = comprobarCampo(field.name, field.value.trim());
        if (error) {
            errores[field.name] = error;
            tieneError(field);
        }
    });

    camposObligatorios.forEach(field => {
        if (field.value.trim() === '') {
            errores[field.name] = `El campo ${field.name} es obligatorio`;
            tieneError(field);
        }
    });

    if (Object.keys(errores).length === 0) {
        alert('Formulario sin errores, adios');
        e.target.submit();
    } else {
        divErrores.innerHTML = Object.values(errores).join('<br>');
    }
});

function tieneError(field) {
    field.style.backgroundColor = 'red';
    field.style.border = '2px solid black';
}

elementos.forEach(field => {
    field.addEventListener('focus', (e) => {
        e.target.style.backgroundColor = 'green';
        e.target.style.border = '2px solid black';
    });

    field.addEventListener('blur', (e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '1px solid grey';
    });

    field.addEventListener('change', (e) => {
        console.log(e.target);
        divErrores.innerHTML = "";
        if (camposRegex.includes(e.target)) {
            let error = comprobarCampo(e.target.name, e.target.value.trim());
            if (error) {
                divErrores.innerHTML = error;
                setTimeout(() => e.target.focus(), 0);
            }
        }
    });
});

provincia.addEventListener('change', (e) => {
    localidad.innerHTML = '';
    const localities = provincias[e.target.value];
    if (localities) {
        listarLocalidades(localities);
        localidad.disabled = false;
    } else {
        localidad.disabled = true;
    }
});

function listarLocalidades(localities) {
    localities.forEach(locality => {
        const option = document.createElement('option');
        option.value = locality.toLowerCase();
        option.textContent = locality;
        localidad.appendChild(option);
    });
}

function comprobarCampo(name, value) {
    let regex, errorMessage;

    switch (name) {
        case 'dni':
            regex = /^$|^\d{8}$/;
            errorMessage = 'debe tener exactamente 8 dígitos';
            break;
        case 'letradni':
            regex = /^$|^[A-Za-z]$/;
            errorMessage = 'debe tener una letra';
            break;
        case 'edad':
            regex = /^$|^(?:[1-9]|[1-9][0-9])$/;
            errorMessage = 'debe ser un número entre 1 y 99';
            break;
        case 'telefono':
            regex = /^$|^\d{9}$/;
            errorMessage = 'debe tener exactamente 9 dígitos';
            break;
        case 'email':
            regex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            errorMessage = 'debe tener un formato válido (ejemplo@test.com)';
            break;
        default:
            return '';
    }

    return regex.test(value) ? '' : `${name}: ${errorMessage}`;
}

function listarErrores(errors) {
    return Object.values(errors).join('\n');
}

function obligatoryMessage(e) {
    let span = e.target.nextElementSibling;
    const inputName = e.target.name;

    if (!span || span.nodeName !== 'SPAN') {
        span = document.createElement('span');
        e.target.after(span);
    }

    if (e.target.value.trim() === '') {
        span.textContent = `\tEl campo ${inputName} es obligatorio`;
        span.style.color = 'red';
    } else {
        span.remove();
    }
}

document.querySelector('#limpiar').addEventListener('click', () => {
    elementos.forEach(field => {
        field.style.backgroundColor = 'white';
        field.style.border = '1px solid grey';
    });

    camposObligatorios.forEach(field => {
        const span = field.nextElementSibling;
        if (span && span.nodeName === 'SPAN') {
            span.remove();
        }
    });

    localidad.innerHTML = '';
    formulario.reset();
    nombre.focus();
});

window.addEventListener('load', e => { nombre.focus() });