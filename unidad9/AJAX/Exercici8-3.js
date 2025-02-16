const SERVER = 'http://localhost/DWEntorno/unidad9/AJAX/Exercici 8.3.php';
let storage = [];
let pointer;

window.addEventListener('load', () => {
    const ticker = document.getElementById('ticker');
    let intervalo = window.setInterval(async () => {
        try {
            const CONTENT = await getNoticia();
            const TIME = getTime();
            let noticia = `${CONTENT} ${TIME}`;
            storage.push(noticia);
            ticker.innerHTML = noticia;
            
            console.log(noticia);
        } catch (error) {
            console.error(error);
        }
    }, 2000);
    document.getElementById('detener').addEventListener('click', stopInterval); 

    function stopInterval() {
        console.log('intervalo terminado');
        window.clearInterval(intervalo);
        intervalo = null;
        pointer = storage.length - 1;
    }

    const next = document.getElementById('siguiente');
    const before = document.getElementById('anterior');
    const array = [next, before];
    array.forEach(element => {
        element.addEventListener('click', e => {
            if (intervalo) {
                stopInterval();
            }
            if (e.target.id === 'siguiente' && pointer != storage.length - 1) {
                pointer++;
                ticker.innerHTML = storage[pointer];
            }
            if(e.target.id === 'anterior' && pointer != 0) {
                pointer--;
                ticker.innerHTML = storage[pointer];
            }
        });
    });
});


function getTime() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutes = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    return `${horas}:${minutes}:${segundos}`;
}

async function getNoticia() {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', SERVER);
        ajax.send();
        ajax.addEventListener('load', () => {
            if (ajax.status === 200) {
                resolve(ajax.responseText);
            } else {
                reject(`Error ${this.status} (${this.statusText}) en la peticion`);
            }
        })
        ajax.addEventListener('error', () => reject('error en la peticion http'));
    });
}