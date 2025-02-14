window.addEventListener('load', () => {
    const url = document.getElementById('recurso');
    const contenidos = document.getElementById('contenidos');

    url.value = window.location.href;

    document.getElementById('enviar').addEventListener('click', (event) => {
        event.preventDefault();

        if (url.value.trim() === '') {
            alert('Debes introducir un url');
        } else {
            getContent(url.value).then(
                (content) => {
                    contenidos.innerText = content;
                }
            ).catch(
                (error) => {
                    console.error(error);
                }
            );
        }
    });
});

function getContent(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        const estado = document.getElementById('estados');
        estado.textContent = '';
        request.addEventListener('readystatechange', () => {
            const codigo = document.getElementById('codigo');
            const headers = document.getElementById('cabeceras');
            switch (request.readyState) {
                case 0:
                    estado.textContent += 'Not initialized\n';
                    break;
                case 1:
                    estado.textContent += 'Loading...\n';
                    break;
                case 2:
                    estado.textContent += 'Headers received\n';
                    break;
                case 3:
                    estado.textContent += 'Loading response...\n';
                    break;
                case 4:
                    estado.textContent += 'Processing complete\n';
                    break;
            }
            codigo.textContent = `${request.status}  ${request.statusText}\n`;
            headers.textContent = `${request.getAllResponseHeaders()}\n`
        });
        request.open('GET', url);
        request.send();
        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log("Fichero cargado con exito");
                resolve(request.responseText);
            } else {
                reject(`Error ${this.status} (${this.statusText}) en la petición`);
            }
        });
        request.addEventListener('error', () => reject('Error en la peticion HTTP'));
    });
}