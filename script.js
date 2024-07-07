// Genera una tabla de suma y la inserta en el HTML
function generarTabla() {
    const tabla = document.getElementById('tablaSuma');
    const size = 5; // Tamaño de la tabla (5x5)

    // Crear encabezados
    let headerRow = '<tr><th></th>';
    for (let i = 1; i <= size; i++) {
        headerRow += `<th>${i}</th>`;
    }
    headerRow += '</tr>';
    tabla.innerHTML += headerRow;

    // Crear filas de la tabla
    for (let i = 1; i <= size; i++) {
        let row = `<tr><th>${i}</th>`;
        for (let j = 1; j <= size; j++) {
            row += `<td><input type="number" id="cell-${i}-${j}" /></td>`;
        }
        row += '</tr>';
        tabla.innerHTML += row;
    }
}

// Verificar las respuestas de los niños
function verificar() {
    const size = 5;
    let correcto = true;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            const respuesta = parseInt(cell.value);
            const suma = i + j;

            if (respuesta !== suma) {
                correcto = false;
                cell.style.backgroundColor = '#ffcccc'; // Respuesta incorrecta
            } else {
                cell.style.backgroundColor = '#ccffcc'; // Respuesta correcta
            }
        }
    }

    const resultado = document.getElementById('resultado');
    if (correcto) {
        resultado.textContent = '¡Todas las respuestas son correctas!';
    } else {
        resultado.textContent = 'Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!';
    }
}

// Llamar a la función para generar la tabla cuando se carga la página
window.onload = generarTabla;
