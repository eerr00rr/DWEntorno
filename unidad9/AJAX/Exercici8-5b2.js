const URL = 'Exercici 8.5-b.php';

window.addEventListener('load', () => {
    const input = document.getElementById('login');
    const dispo = document.getElementById('disponibilidad');

    document.getElementById('comprobar').addEventListener('click', async () => {
        dispo.innerHTML = '';
        const formData = new FormData();
        formData.append('login', input.value);

        try {
            let resultado = await getDatos(formData);
            
            let disponibilidad = resultado.respuesta.disponible;
            if (disponibilidad === 'si') {
                dispo.innerHTML = `Login ${input.value} disponible`;
            } else {
                console.log(resultado.respuesta.alternativas);
                const alternativas = resultado.respuesta.alternativas.login;
                const ul = document.createElement('ul');
                alternativas.forEach(element => {
                    const li = document.createElement('li');
                    li.textContent = element;
                    ul.appendChild(li);
                })
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
            xhr.setRequestHeader('Accept', 'application/json');
            
            xhr.send(login);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
        });
    }
});

