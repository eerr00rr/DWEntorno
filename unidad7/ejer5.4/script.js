const form1 = document.forms['formulario'];
const area = form1.elements['areaTexto'];
const p1 = document.querySelector('#p1');

area.addEventListener('input', e => {
    if (area.value.length !== 100) {
        p1.textContent = 'Puedes escribir mas';
    } else {
        p1.textContent = 'Has llegado al limite';
    }
});
