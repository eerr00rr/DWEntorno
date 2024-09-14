function ejer1() {
    let resultado = 1;
    let num = prompt('Introduzca un numero entero:');

    for(let i = num; i > 1; i--) {
        resultado *= i;
    }
    alert('Factorial de ' + num + ' es: ' + resultado);
}

function ejer2() {
    let num = prompt('Introduzca un numero entero:');
    let str = 'El numero ' + num + ' es ';
    let isPrime = true;

    str = (num % 2 == 0) ? str + 'Par y ' : str + 'Impar y ';
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    str = (isPrime) ? str + 'es Primo' : str + 'no es Primo';
    alert(str);
}

function ejer3() {
    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= i; j++) {
           document.write(i); 
        }
        document.write('<br>');
    }
}

function ejer4() {
    let filas = prompt('Cuantas filas')
    for (let i = filas; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
           document.write(i); 
        }
        document.write('<br>');
    }
}

function ejer5() {
    let filas = prompt('Introduzca numero de filas menor que 50');
    if (filas < 50 && filas > 0) {
        for (let i = 1; i <= filas; i++) {
            for (let j = 1; j <= i; j++) {
                document.write(j);
            }   
            document.write('<br>'); 
        }
    }
}

function ejer6() {
    for (let i = 1; i <= 500; i++) {
        let resultado = (i % 4 == 0) ? i + ' (Multiplo de 4)' :
         (i % 9 == 0) ? i + ' (Multiplo de 9)' : i;

        document.write(resultado + '<br>');

        if (i % 5 == 0) {
            let linea = document.createElement('hr'); 
            document.body.appendChild(linea);
        }
    }
}

function ejer7() {
    let filas = prompt('Numero de filas:');
    let columnas = prompt('Numero de columnas:');
    let tabla = document.createElement('table');
    let nums = columnas * filas;

    for (let i = 1; i <= filas; i++) {
        let tr = document.createElement('tr');
        
        for (let j = 1; j <= columnas; j++) {
            let td = document.createElement('td');
            let texto = document.createTextNode(nums);
            td.appendChild(texto);
            tr.appendChild(td);
            nums--;
        }
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
}

function ejer8() {
    let num = prompt("Elige un numero entre 1 y 100");

    if (num >= 1 && num <= 100) {
        let resultado = 0;
        let x = 1;
        let temp;

        for (let i = 0; i <= num; i++) {
            temp = x;
            x = x + resultado;
            resultado = temp;
        }
        alert('Fibonachi de numero ' + num + ' es ' + resultado);
    } else {
        alert('Numero eligido no es entre 1 y 100');
    }
}

function ejer9() {
    while (true) {
        let items = ['Pierda', 'Papel', 'Tijeras'];
        let jugador = items[prompt('Elige (0)Pierda (1)Papel (2)Tijeras')]; 
        let ordenador = items[Math.floor(Math.random() * 3)];

        if (jugador == ordenador) {
           alert('Tu: ' + jugador + ' Ordenador: ' + ordenador); 
        } else if (
            (jugador == items[0] && ordenador == items[2]) ||
            (jugador == items[1] && ordenador == items[0]) ||
            (jugador == items[2] && ordenador == items[1]) 
        ) {
            alert('Has ganado. Tu: ' + jugador + ' Ordenador: ' + ordenador);
            break;
        } else {
            alert('Has perdido. Tu: ' + jugador + ' Ordenador: ' + ordenador);
            break;
        }
    }
}