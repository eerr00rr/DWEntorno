var input;
var para = document.querySelector('p');
function ejer1() {
    input = document.querySelector('#prompt').value;
    para.innerHTML = input.toUpperCase();
}
function ejer2() {
    input = document.getElementById('prompt').value;
    input = input.replaceAll(" ", '');
    var new_string = '';
    for (var i = 0; i < input.length; i++) {
        new_string += "".concat(input[i], "-");
    }
    para.innerHTML = new_string.slice(0, -1);
}
function ejer3() {
    input = String.toString(document.getElementById('prompt').value);
    var vocales = [
        'a', 'e', 'i', 'o', 'u'
    ];
    var sin_acentos = input.normalize("NFD");
    var num_acentos = 0;
    for (var i = 0; i < sin_acentos.length; i++) {
        for (var j = 0; j < vocales.length; j++) {
            if (sin_acentos[i] === vocales[j]) {
                num_acentos++;
            }
        }
    }
    alert("la cadena '".concat(input, "' tiene ").concat(num_acentos, " acentos"));
}
function ejer4() {
    input = document.getElementById('prompt').value;
    if (input.includes('(')) {
        var start = input.indexOf('(');
        if (input.includes(')')) {
            var end = input.indexOf(')');
            input = input.substring(start + 1, end);
        }
        else {
            input = input.substring(start + 1);
        }
    }
    para.innerHTML = input;
}
function ejer5() {
    input = document.getElementById('prompt').value;
    var vocales = [
        'a', 'e', 'i', 'o', 'u'
    ];
    var sin_acentos = input.normalize("NFD");
    for (var i = 0; i < vocales.length; i++) {
        if (sin_acentos.includes(vocales[i])) {
            for (var j = 0; j < sin_acentos.length; j++) {
                for (var k = 0; k < vocales.length; k++) {
                    if (sin_acentos[j] === vocales[k]) {
                        primer_vocal = sin_acentos.charAt(sin_acentos[j]);
                        alert("El primer vocal en '".concat(sin_acentos, "' es '").concat(vocales[k], "' en la indice '").concat(j, "'"));
                        break;
                    }
                }
            }
            break;
        }
    }
}
