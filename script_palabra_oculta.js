const palabras = ["PERRO", "GATO", "RANA", "LORO"];
const tablaLetras = document.getElementById('tablaLetras');
const filas = 5;
const columnas = 5;
let palabraOculta = palabras[Math.floor(Math.random() * palabras.length)];

// Genera una tabla de letras aleatorias y esconde una palabra
function generarTabla() {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tabla = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(letras.charAt(Math.floor(Math.random() * letras.length)));
        }
        tabla.push(fila);
    }

    // Esconde la palabra en la tabla
    let posicionInicial = Math.floor(Math.random() * (filas * columnas - palabraOculta.length));
    let filaInicial = Math.floor(posicionInicial / columnas);
    let columnaInicial = posicionInicial % columnas;

    for (let k = 0; k < palabraOculta.length; k++) {
        tabla[filaInicial][columnaInicial + k] = palabraOculta.charAt(k);
    }

    // Muestra la tabla en el HTML
    tablaLetras.innerHTML = '';
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = tabla[i][j];
            cell.onclick = () => cell.classList.toggle('selected');
            tablaLetras.appendChild(cell);
        }
    }
}

// Verifica si la palabra seleccionada es correcta
function verificar() {
    let seleccionadas = Array.from(document.querySelectorAll('.cell.selected')).map(cell => cell.textContent).join('');
    const resultado = document.getElementById('resultado');

    if (seleccionadas === palabraOculta) {
        resultado.textContent = '¡Correcto! Encontraste la palabra oculta.';
    } else {
        resultado.textContent = 'Incorrecto. ¡Inténtalo de nuevo!';
    }
}

// Llamar a la función para generar la tabla cuando se carga la página
window.onload = generarTabla;
