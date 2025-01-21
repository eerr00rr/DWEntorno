const SERVER = "https://jsonplaceholder.typicode.com";
const tbody = document.querySelector("tbody");

window.addEventListener("load", () => {
  document.getElementById("form-show").addEventListener("submit", (event) => {
    event.preventDefault();
    let idUser = document.getElementById("id-usuario").value;
    if (isNaN(idUser) || idUser.trim() == "") {
      alert("Debes introducir un número");
    } else {
      fetch(SERVER + "/posts?userId=" + idUser)
        .then((response) => response.json())
        .then((posts) => {
          tbody.innerHTML = ""; // borramos el contenido de la tabla
          posts.forEach((post) => {
            const newPost = document.createElement("tr");
            newPost.innerHTML = `
                  <td>${post.userId}</td>
                  <td>${post.id}</td>
                  <td>${post.title}</td>
                  <td>${post.body}</td>`;
            tbody.appendChild(newPost);
          });
          document.getElementById("num-posts").textContent = posts.length;
        })
        .catch((error) => console.error(error));
    }
  });
});
