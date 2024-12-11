const form1 = document.forms['formulario'];
const elementos = form1.elements;
const form_length = form1.elements.length;

for (let i = 0; i < form_length; i++) {
    elementos[i].addEventListener('input', e => {
        const elemento = e.target;
        elemento.blur();
        console.log(elemento);
    });
}