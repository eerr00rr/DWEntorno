let enlaces = document.getElementsByTagName('a');

alert(`Hay actualmente ${enlaces.length} enlaces en este documento`);

alert(`El penultimo enlace es ${enlaces[enlaces.length - 2]}`);

let prueba = [];
for (let i = 0; i < enlaces.length; i++) {
    if (enlaces[i].getAttribute('href') == 'http://prueba') {
        prueba.push(i);
    }
}
let str = '';
prueba.forEach(i => {
    str += i + '\n';
});
alert(`Enlaces que apuntan al http://prueba son \n${str}`);

let parafo3 = document.getElementsByTagName('p')[2];
let enlacesPara3 = parafo3.getElementsByTagName('a');
str = '';
for (const i of enlacesPara3) {
    str += `${i}\n`;
}
alert(`Los enlaces en parafo 3 son:\n${str}`);