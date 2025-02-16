const URL = 'Exercici 8.4.php';

window.addEventListener('load', () => {
    const input = document.getElementById('login');
    const dispo = document.getElementById('disponibilidad');

    document.getElementById('comprobar').addEventListener('click', () => {
        const formData = new FormData();
        formData.append('login', input.value);

        fetch(URL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => dispo.innerHTML = result)
        .catch(error => console.error(error));
    });
});