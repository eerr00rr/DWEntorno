let parafo = document.createElement('p');
document.body.appendChild(parafo);

function ejer1() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let tiempo = `${date.getHours()}:${date.getMinutes()}`;

    let dateFinal = `Hui és dimarts, ${day} de ${month} de ${year} i són les ${tiempo} hores`;

    parafo.textContent = dateFinal;
}

function ejer2() {
    let inicio = new Date().getSeconds();

    let nombre = prompt('Introduce Nombre');
    let apellidos = prompt('Introduce apellidos');

    if (nombre === "") {
        alert('Error: nombre vacío');
        return;
    } else if (apellidos === "") {
        alert('Error: apellidos vacío');
        return;
    }

    let fin = new Date().getSeconds();

    parafo.innerHTML = `A introduir ${nombre} ${apellidos} ha tardat ${fin - inicio} segons`;
}

function ejer3() {
    let days_of_the_week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let month = parseInt(prompt("Month:"));
    let year = parseInt(prompt("Year"));

    if (probarMonth(month) && probarYear(year)) {
        let last_day = new Date(year, month, 0).getDate();

        let days = [];
        for (let day = 1; day <= last_day; day++) {
            let day_name = days_of_the_week[new Date(year, month - 1, day).getDay()];
            let string = ` ${day} (${day_name})`
            days.push(string);
        }
        parafo.innerHTML = `${month}-${year} ${days}`;
    } else {
        alert('error');
    }

    function probarMonth(month) {
        if (month >= 1 && month <= 12) {
            return true;
        }
    }
    function probarYear(year) {
        if (year > 0) {
            return true;
        }
        return false;
    }
}

function ejer4() {
    let entrada = new Date(prompt('Introdunce fecha (yyyy-mm-dd'));
    console.log(entrada);

    if (isNaN(entrada)) {
        alert('fecha incorrecta');
    }

    let fecha30 = new_date(entrada, 30);
    let fecha60 = new_date(entrada, 60);
    let fecha90 = new_date(entrada, 90);

    let resultado = `${fecha30}\n${fecha60}\n${fecha90}`;

    parafo.innerText = resultado;

    function new_date(fecha, days_forward) {
        let nuevo = new Date(fecha);
        nuevo.setDate(nuevo.getDate() + days_forward);
        return nuevo;
    }
}

let button_stop = document.createElement('button');
let button_resume = document.createElement('button');

button_stop.setAttribute("type", "button");
button_resume.setAttribute("type", "button");

button_stop.innerHTML = 'stop';
button_resume.innerHTML = 'resume';

function ejer5() {

    let interval = setInterval(toString, 1000);

    function toString() {
        if (seconds_timer === 0) {
            clearInterval(interval);
            alert('Countdown terminado adios');
            return;
        }
        parafo.innerText = `${update_clock()} timer: ${countdown(stop)}`;
    }

    function update_clock() {
        let clock = new Date();
        let date = clock.toLocaleDateString(hour12 = false);
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();

        return `${date} ${hours}:${minutes}:${seconds}`;
    }

    function countdown(stop) {
        if (stop) {
            return seconds_timer;
        }
        seconds_timer--;
        return seconds_timer;
    }

    let stop = false;
    let seconds_timer = parseInt(prompt('Cuantos segundos quieres contar atras')) + 1;


    document.body.appendChild(button_stop);
    document.body.appendChild(button_resume);

    button_stop.onclick = function () {
        stop = true;
    };
    button_resume.onclick = function () {
        stop = false;
    };
}