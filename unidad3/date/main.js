const parafo = document.createElement('p');

function ejer1() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let tiempo = `${date.getHours()}:${date.getMinutes()}`;

    let dateFinal = `Hui és dimarts, ${day} de ${month} de ${year} i són les ${tiempo} hores`;
    
    parafo.innerHTML = dateFinal;
    
    document.body.appendChild(parafo);
}

function ejer2() {
    let date = new Date();
    let inicio = date.getSeconds();

    let nombre = prompt('Introduce Nombre');
    let apellidos = prompt('Introduce apellidos');

    if (nombre === "") {
        alert('Error: nombre vacío');
        return;
    } else if (apellidos === "") {
        alert('Error: apellidos vacío');
        return;
    }

    let fin = date.getSeconds();
    
    console.log(inicio);
    console.log(fin);

    parafo.innerHTML = `A introduir ${nombre} ${apellidos} ha tardat ${fin - inicio} segons`;
    
    document.body.appendChild(parafo);
}
