const URL = 'Exercici 8.5-b.php';

window.addEventListener('load', () => {
    const input = document.getElementById('login');
    const dispo = document.getElementById('disponibilidad');

    document.getElementById('comprobar').addEventListener('click', () => {
        dispo.innerHTML = '';
        const formData = new FormData();
        formData.append('login', input.value);

        fetch(URL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            let disponibilidad = data.respuesta.disponible;
            if (disponibilidad === 'si') {
                dispo.innerHTML = `Login ${input.value} disponible`;
            } else {
                console.log(data.respuesta.alternativas);
                const alternativas = data.respuesta.alternativas.login;
                const ul = document.createElement('ul');
                alternativas.forEach(element => {
                    const li = document.createElement('li');
                    li.textContent = element;
                    ul.appendChild(li);
                })
                dispo.appendChild(ul);
            }
        })
        .catch(error => console.error(error));
    });
});

