let input;
let para = document.getElementsByTagName('p')[0];

function ejer1() {
    input = document.getElementById('prompt').value;

    para.innerHTML = input.toUpperCase();
}

function ejer2() {
    input = document.getElementById('prompt').value;
    input = input.replaceAll(" ", '');
    let new_string = '';
    for (let i = 0; i < input.length; i++) {
        new_string += `${input[i]}-`; 
    }

    para.innerHTML = new_string.slice(0, -1);
}

function ejer3() {
    input = document.getElementById('prompt').value;
    let vocales = [
        'a', 'e', 'i', 'o', 'u'
    ];

    let sin_acentos = input.normalize("NFD");
    let num_acentos = 0;
    for (let i = 0; i < sin_acentos.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (sin_acentos[i] === vocales[j]) {
                num_acentos++;
            }
        }
    }

    alert(`la cadena '${input}' tiene ${num_acentos} acentos`);
}

function ejer4() {
    input = document.getElementById('prompt').value;

    if (input.includes('(')) {
        let start = input.indexOf('(');

        if (input.includes(')')) {
            let end = input.indexOf(')');
            input = input.substring(start + 1, end);
        } else {
            input = input.substring(start + 1);
        }
    } 
    para.innerHTML = input; 
}

function ejer5() {
    input = document.getElementById('prompt').value;
    let vocales = [
        'a', 'e', 'i', 'o', 'u'
    ];
 
    let sin_acentos = input.normalize("NFD");
    for (let i = 0; i < vocales.length; i++) {
        if (sin_acentos.includes(vocales[i])) {
            for (let j = 0; j < sin_acentos.length; j++) {
                for (let k = 0; k < vocales.length; k++) {
                    if (sin_acentos[j] === vocales[k]) {
                        primer_vocal = sin_acentos.charAt(sin_acentos[j]);
                        alert(`El primer vocal en '${sin_acentos}' es '${vocales[k]}' en la indice '${j}'`);
                        break;
                    }
                }
            }
            break;
        }
    }
}