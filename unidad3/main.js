function ejer1() {
    let months = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ]

    for (let i of months) {
        document.write(i + '<br>');
    }
}

function ejer2() {
    var valors = [true, 5, false, "hola", "adeu", 2];

    let textoMayor = '';
    let boleanos = '';
    let nums = [];
    for (let item of valors) {
        if (textoMayor < item.length) {
            textoMayor = item;
        }
        if (typeof item === 'boolean') {
            boleanos += item + ' ';
        }
        if (typeof item === 'number') {
            nums.push(item);
        }
    }

    let suma = nums[0] + nums[1];
    let resta = nums[0] - nums[1];
    let multi = nums[0] * nums[1];
    let division = nums[0] / nums[1];
    let modular = nums[0] % nums[1];

    alert(
        'El texto mayor es: ' + textoMayor + '\n' +
        'Los boleanos son: ' + boleanos + '\n' +
        'Suma: ' + suma + '\n' +
        'Resta: ' + resta + '\n' +
        'Multi: ' + multi+ '\n' +
        'Division: ' + division + '\n' +
        'Modular: ' + modular + '\n' 
    );
}

function ejer3() {
    let letras = [
      "T", "R", "W", "A", "G", "M", "Y", 
      "F", "P", "D", "X", "B", " N", "J", "Z", "S",
      "Q", "V", "H", "L", "C", "K", "E"
    ];
    let dni = prompt('Introduzca DNI');

    if (dni.length !== 9) {
        alert('el dno tiene que tener una letra y ocho numeros');
    }

    let letra = dni.slice(-1).toUpperCase; 
    let numeros = dni.slice(0, -1);

    if (isNaN(numeros) || numeros.length != 8) {
        alert('Falta de numeros');
        return;
    }

    let posLetra = numeros % 23;
    let letraCorrecta = letras[posLetra];

    if (letra === letraCorrecta) {
        alert('DNI correcta');
    } else {
        alert('Letra no es correcta');
    }
}

/* Define a function that displays information about a string of text that is passed
 as an argument. The function should check whether it consists of only
  uppercase, lowercase, or letters uppercase and lowercase
*/
function ejer4() {
    let input = prompt('Dame string');

    stringInfo(input);

    function stringInfo(str)  {
        if (str === str.toUpperCase()) {
            alert('El string ' + str + ' es en mayusculas');
        } else if (str === str.toLowerCase()) {
            alert('El string ' + str + ' es en minusuculas');
        } else {
            alert('El string ' + str + ' tiene mayuscualas y minusculas');
        }
    }
}

function ejer5() {
    let input = prompt('Dame un string');

    function isPalindrome(str) {
        let rawStr = str.replaceAll(' ', '').toLowerCase();

        let end = rawStr.length - 1;
        for (let i = 0; i < end; i++) {
            if (rawStr[i] !== rawStr[end]) {
                return false;
            }    
            end--;
        }
        return true;
    }

    if (isPalindrome(input)) {
        alert('Es Palindromo');
    } else {
        alert('No es Palindromo');
    }
}

function ejer6() {

}

function ejer7() {

}

function ejer8() {

}

function ejer9() {

}

function ejer10() {

}