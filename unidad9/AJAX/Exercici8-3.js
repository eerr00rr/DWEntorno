const SERVER = 'http://localhost/DWEntorno/Recursos Exercicis ud 8_VAL/Exercici 8.3.php';

window.addEventListener('load', () => {
    const ticker = document.getElementById('ticker');
    let intervalo = window.setInterval(async () => {
        try {
            const NOTICIA = await getNoticia();
            let ahora = new Date();
            let horas = ahora.getHours();
            let minutes = ahora.getMinutes();
            let segundos = ahora.getSeconds();
            ticker.innerHTML = `${NOTICIA} ${horas}:${minutes}:${segundos}`;
        } catch (error) {
            console.error(error);
        }
    }, 2000);
    document.getElementById('detener').addEventListener('click', () => {
        console.log('intervalo terminado');
        window.clearInterval(intervalo);
    });
});
//make a function that stores the files in an array for the previous 
//and next file that has been saved in the array
//give an alert saying that you can't go further (-1 array.length)
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