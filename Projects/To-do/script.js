const boton = document.getElementById('add-task');
const ul = document.getElementById('task-list');

boton.addEventListener('click', () => {
    let task = document.getElementById('new-task').value;

    let li = document.createElement('li');
    li.textContent = task;

    ul.appendChild(li);
});