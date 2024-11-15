let raton = document.getElementById('raton');
let pNavegador = document.getElementById('navegador');
let pPagina = document.getElementById('pagina');

let teclado = document.getElementById('teclado');
let caracter = document.getElementById('caracter');
let numero = document.getElementById('numero');

raton.addEventListener('click', (event) => {
    raton.style.backgroundColor = '#ffffcc';
});
document.addEventListener('mousemove', (event) => {
    pNavegador.textContent = `Navegador [${event.clientX}, ${event.clientY}]`;
    pPagina.textContent = `Pagina [${event.pageX}, ${event.pageY}]`;
});
document.addEventListener('keypress', (event) => {
    caracter.textContent = `Caracter [${event.key}]`;
    numero.textContent = `Caracter [${event.code.charCodeAt(0)}]`;
    teclado.style.backgroundColor = '#cce6ff';
});
document.addEventListener('mousemove', (event) => {
    raton.style.backgroundColor = 'white';
    teclado.style.backgroundColor = 'white';
});


