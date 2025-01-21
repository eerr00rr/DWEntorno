const SERVER = 'https://jsonplaceholder.typicode.com';
const tbody = document.getElementsByTagName('tbody')[0];

window.addEventListener('load', function() {
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();
    let idUser = document.getElementById('id-usuario').value;
    if (isNaN(idUser) || idUser == '') {
      alert('Debes introducir un número');
    } else {
      const posts = getPosts(idUser);
      tbody.innerHTML = ''; // borramos el contenido de la tabla
      datos.forEach(post => {
        const newPost = document.createElement('tr');
        newPost.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>`;
        tbody.appendChild(newPost);
      })
      document.getElementById('num-posts').textContent = datos.length;
    }
  })
})

function getPosts(idUser) {
  const peticion = new XMLHttpRequest();
  peticion.open('GET', SERVER + '/posts?userId=' + idUser);
  peticion.send();
  peticion.addEventListener('load', function() {
    if (peticion.status === 200) {
      const datos = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
      return datos
    } else {
      console.error("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
    }
  })
  peticion.addEventListener('error', () => console.error('Error en la petición HTTP'));
}