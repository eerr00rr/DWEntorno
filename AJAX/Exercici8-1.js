const SERVER = 'http://localhost/DWEntorno/Recursos Exercicis ud 8_VAL';

window.addEventListener('load', () => {
    getForm(renderForm);
})

function getForm(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', SERVER + '/Exercici 8.1.txt');
    request.send();
    request.addEventListener('load', () => {
        if (request.status === 200) {
            callback(request.responseText);
        } else {
            console.error("Error: " + request.status + " (" + request.statusText + ") en la peticion");
        }
    });
    request.addEventListener('error', () => console.error('Error en la peticion HTTP'));
}

function renderForm(datos) {
    const div = document.getElementById('info');
    console.log(datos);
    div.innerHTML = datos;
}
