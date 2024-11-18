let c = document.getElementsByClassName('limpiar')[0];
let pantalla = document.getElementsByClassName('pantalla')[0];
let numeros = document.querySelectorAll('.numero');
let operadores = document.querySelectorAll('.operador');
let punto = document.getElementsByClassName('punto')[0];

let expression = [];

function pulsada(char) {
    let string = '';
    if (char === 'C') {
        expression.pop();
    } else {
        expression.push(char);
    }
    expression.forEach((element) => {
        if (element === '+' || element === '*' || element === '/' || element === '-') {
            string += ` ${element} `;
        } else if (element === '=') {
            expression.pop(); // removes the '='
            try {
                string = eval(string);
                expression = [];
                expression.push(string);
            } catch(error) {
                if (error instanceof SyntaxError) {
                    alert('Error: invalid expression');
                }
            }
        } else {
            string += element;
        }
    });
    console.log(expression);
    pantalla.childNodes[0].nodeValue = string;
}

function modificacion(char) {
    switch (char) {
        case 'la_C':
            c.style = 'background-color: red; color: white;';
            break;
        case 'punto':
            punto.style = 'background-color: green; color: black;';
            break;
        case 'pant':
            pantalla.style = 'background-color: black;';
            break;
    }
}

function marcaDeNumeros() {
    numeros.forEach((element) => {
        element.style = 'background-color: blue; color: white;'
    });
}

function marcaDeOperadores() {
    operadores.forEach((element) => {
        element.style = 'background-color: red; color: white;'
    });
}