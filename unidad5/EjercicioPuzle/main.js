let blancoId; // Id de la celda con el blanco.gif
let startTime; // Tiempo de inicio del juego

// Función para inicializar el juego
function iniciarJuego() {
  startTime = Date.now(); // Guardar el tiempo de inicio del juego
  const puzzleArray = generarPuzzle(); // Crear el arreglo del puzzle
  //const puzzleArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; //Easy win
  crearTabla(puzzleArray); // Crear la tabla con las imágenes
}

// Generar un arreglo de números aleatorios del 1 al 16
function generarPuzzle() {
  const puzzle = new Set();
  while (puzzle.size < 16) {
    puzzle.add(Math.floor(Math.random() * 16) + 1);
  }
  return Array.from(puzzle);
}

// Crear la tabla con las imágenes del puzzle
function crearTabla(puzzleArray) {
  const tabla = document.createElement("table");
  let id = 1;

  for (let i = 0; i < 4; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const celda = crearCelda(id, puzzleArray[i * 4 + j]);
      fila.appendChild(celda);
      id++;
    }
    tabla.appendChild(fila);
  }

  document.body.appendChild(tabla);
}

// Crear una celda individual de la tabla
function crearCelda(id, valor) {
  const td = document.createElement("td");
  td.id = "td_" + id; // Agregar prefijo al id

  const img = document.createElement("img");
  img.width = 100;

  if (valor === 16) {
    img.src = "imagenes/blanco.gif";
    blancoId = td.id; // Guardar el id de la celda que contiene el blanco.gif
  } else {
    img.src = `imagenes/${valor}.gif`;
  }

  img.onclick = () => manejarClickCelda(td.id);
  td.appendChild(img);

  return td;
}

// Manejar el clic sobre una celda
function manejarClickCelda(idCelda) {
  if (esAdyacente(idCelda, blancoId)) {
    intercambiarImagenes(idCelda, blancoId);
    comprobarPuzzle();
  }
}

// Verificar si dos celdas son adyacentes
function esAdyacente(id1, id2) {
  return (
    id1 === getAdyacente(id2, "arriba") ||
    id1 === getAdyacente(id2, "abajo") ||
    id1 === getAdyacente(id2, "izquierda") ||
    id1 === getAdyacente(id2, "derecha")
  );
}

// Obtener la celda adyacente en una dirección específica
function getAdyacente(id, direccion) {
  const idNumero = parseInt(id.replace("td_", ""));
  switch (direccion) {
    case "arriba":
      return "td_" + (idNumero - 4);
    case "abajo":
      return "td_" + (idNumero + 4);
    case "izquierda":
      return idNumero % 4 === 1 ? null : "td_" + (idNumero - 1);
    case "derecha":
      return idNumero % 4 === 0 ? null : "td_" + (idNumero + 1);
    default:
      return null;
  }
}

// Intercambiar las imágenes entre dos celdas
function intercambiarImagenes(id1, id2) {
  const img1 = document.querySelector(`#${id1} img`);
  const img2 = document.querySelector(`#${id2} img`);

  [img1.src, img2.src] = [img2.src, img1.src]; // Intercambio de imágenes
  blancoId = id1; // Actualizar la posición del blanco.gif
}

// Comprobar si el puzzle está en el estado correcto
function comprobarPuzzle() {
  let contadorCorrectas = 0;
  const celdas = document.querySelectorAll("td");

  celdas.forEach((celda) => {
    const idNumero = parseInt(celda.id.replace("td_", ""));
    const imagen = celda.querySelector("img");
    const valor = parseInt(imagen.src.slice(38).replace(".gif", ""));

    if (valor === idNumero) {
      contadorCorrectas++;
    }
  });

  if (contadorCorrectas === 15) {
    // Todas las piezas menos el blanco en su lugar
    mostrarMensajeVictoria();
  }
}

// Mostrar el mensaje de victoria
function mostrarMensajeVictoria() {
  const endTime = Date.now();
  const tiempoTranscurrido = (endTime - startTime) / 1000;
  alert(`¡Felicitaciones! Ganaste en ${tiempoTranscurrido} segundos.`);
}

// Iniciar el juego
iniciarJuego();
