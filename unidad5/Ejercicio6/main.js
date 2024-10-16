let unaVez = 0;

function crearTabla() {
    if (unaVez === 0) {
        unaVez++;
        
        let tabla = document.createElement('table');

        let filas = document.getElementById('filas').value;
        let columnas = document.getElementById('columnas').value;

        for (let fila = 0; fila < filas; fila++) {
            let tr = document.createElement('tr');
            for (let item = 0; item < columnas; item++) {
                let td = document.createElement('td');
                let select = document.createElement('select');
                for (let i = 1; i < 16; i++) {
                    let opcion = document.createElement('option');
                    opcion.value = `../ArchivosEjercicios/imagenes/${i}.gif`;
                    opcion.text = `imagen${i}`;
                    select.appendChild(opcion);
                }
                td.appendChild(select);
                tr.appendChild(td);
            }
            tabla.appendChild(tr);
        }
        document.body.appendChild(tabla);

        let boton = document.createElement('button');
        boton.textContent = 'Prueba';
        document.body.appendChild(boton);

        boton.onclick = function() {
            if (unaVez === 1) {
                let filas = document.getElementsByTagName('tr');
                for (let fila = 0; fila < filas.length; fila++) {
                    let columnas = filas[fila].getElementsByTagName('td');
                    for (let columna = 0; columna < columnas.length; columna++) {
                        let select = columnas[columna].getElementsByTagName('select');
                        let valor = select[0].value;
                        select[0].remove();

                        let imagen = document.createElement('img');
                        imagen.src = valor;
                        columnas[columna].appendChild(imagen);
                    }
                }
            }
        };
    }
}