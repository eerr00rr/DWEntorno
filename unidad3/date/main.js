let parafo = document.createElement('p');
document.body.appendChild(parafo);

function ejer1() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let tiempo = `${date.getHours()}:${date.getMinutes()}`;

    let dateFinal = `Hui és dimarts, ${day} de ${month} de ${year} i són les ${tiempo} hores`;
    
    parafo.innerHTML = dateFinal;    
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
    
    console.log(inicio);
    console.log(fin);

    parafo.innerHTML = `A introduir ${nombre} ${apellidos} ha tardat ${fin - inicio} segons`;
}

function ejer3() {
    let days_of_the_week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    let month = parseInt(prompt("Month:"));
    let year = parseInt(prompt("Year"));

    if (probarMonth(month) && probarYear(year)) {
        let last_day = new Date(year, month, 0).getDate();

        let days = [];
        for (let day = 1; day <= last_day; day++){
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
    let entrada = prompt('Introdunce fecha (yyyy-mm-dd');
    let fecha = new Date(entrada);

    if (isNaN(fecha)) {
        alert('fecha incorrecta');
    }
    
    let fecha30 = new_date(fecha, 30);
    let fecha60 = new_date(fecha, 60);
    let fecha90 = new_date(fecha, 90);

    let resultado = `${fecha30}\n${fecha60}\n${fecha90}`;

    parafo.innerText = resultado;

    function new_date(fecha, days_forward) {
        let nuevo = new Date(fecha);
        nuevo.setDate(nuevo.getDate() + days_forward);
        return nuevo;
    }
}

function ejer5() {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let date = clock.toLocaleDateString(hour12=false); 

    document.write(date);
}