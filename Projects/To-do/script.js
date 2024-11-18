const boton = document.getElementById("addtodo");
const ul = document.getElementById("list");

boton.addEventListener("click", () => {
  let input = document.getElementById("todo").value;

  let li = document.createElement("li");
  li.className = "list-group-item";

  let div = document.createElement("div");
  div.className = "container bg-danger";
  li.appendChild(div);

  let input_radio = document.createElement("input");
  input_radio.type = "radio";
  div.appendChild(input_radio);

  ul.appendChild(li);
});
