const SERVER = 'https://jsonplaceholder.typicode.com'
const tbody = document.querySelector('tbody')

window.addEventListener('load', function () {
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();
    let idUser = document.getElementById('id-usuario').value
    if (isNaN(idUser) || idUser.trim() == '') {
      alert('Debes introducir un número')
    } else {
      getPosts(idUser)
        .then(function (posts) {
          tbody.innerHTML = '' // borramos el contenido de la tabla
          posts.forEach(post => {
            const newPost = document.createElement('tr')
            newPost.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`
            tbody.appendChild(newPost)
          })
          document.getElementById('num-posts').textContent = posts.length
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  })
})

function getPosts(idUser) {
  return new Promise(function (resolve, reject) {
    let peticion = new XMLHttpRequest()
    peticion.open('GET', SERVER + '/posts?userId=' + idUser)
    peticion.send()
    peticion.addEventListener('load', () => {
      if (peticion.status === 200) {
        resolve(JSON.parse(peticion.responseText))
      } else {
        reject(`Error ${this.status} (${this.statusText}) en la petición`);
      }
    })
    peticion.addEventListener('error', () => reject('Error en la petición HTTP'))
  })
}