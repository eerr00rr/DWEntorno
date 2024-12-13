const area = document.querySelector('#texto');
const p1 = document.createElement('p');

area.addEventListener('input', e => {
    let respuesta = validarArea();

    p1.textContent = respuesta;
    document.body.appendChild(p1);
});

function validarArea() {
    let texto = '';
    let areaStr = area.value;
    let charLen = area.value.length;

    if (charLen < 100) {
        texto += 'Puedes escribir mas caracteres: ' + charLen;
    } else {
        area.value = areaStr.slice(0, 100);
        texto += 'Has llegado al limite: 100';
    }
    return texto;
}
