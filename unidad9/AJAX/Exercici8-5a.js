const URL = 'Exercici 8.5-a.php';

window.addEventListener('load', () => {
    const input = document.getElementById('login');
    const dispo = document.getElementById('disponibilidad');

    document.getElementById('comprobar').addEventListener('click', async () => {
        try {
            const formData = new FormData();
            formData.append('login', input.value);

            let resultado = await getDatos(formData);
            let disponibilidad = resultado.getElementsByTagName('disponible'); 

            if (disponibilidad.textContent === 'si') {
                dispo.innerHTML = `Login ${input.value} disponible`;
            } else {
                const alternativas = resultado.getElementsByTagName('login');
                const ul = document.createElement('ul');
                for (const element of alternativas) {
                    const li = document.createElement('li');
                    li.textContent = element.textContent;
                    ul.appendChild(li);
                }
                dispo.appendChild(ul);
            }
            
        } catch (error) {
            console.error(error);
        }
    });

    async function getDatos(login) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', URL);

            xhr.send(login);
            xhr.onload = function() {
                if(xhr.status === 200) {
                    resolve(xhr.responseXML);
                } else {
                    reject(xhr.status + ' ' + xhr.statusText);
                }
            }
        });
    }
});

