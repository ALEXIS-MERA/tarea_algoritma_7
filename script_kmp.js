function construirTablaPatron(patron) {
    const tablaPatron = Array(patron.length).fill(0);
    let j = 0;

    for (let i = 1; i < patron.length; i++) {
        if (patron[i] === patron[j]) {
            j++;
            tablaPatron[i] = j;
        } else {
            if (j !== 0) {
                j = tablaPatron[j - 1];
                i--;
            }
        }
    }

    return tablaPatron;
}

function kmpBusqueda(cadena, patron) {
    const tablaPatron = construirTablaPatron(patron);
    let i = 0, j = 0;

    while (i < cadena.length) {
        if (patron[j] === cadena[i]) {
            i++;
            j++;
        }

        if (j === patron.length) {
            return i - j;
        } else if (i < cadena.length && patron[j] !== cadena[i]) {
            if (j !== 0) {
                j = tablaPatron[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

function buscarSubcadena() {
    const cadena = document.getElementById('cadena').value;
    const subcadena = document.getElementById('subcadena').value;
    const resultado = document.getElementById('resultado');

    if (!cadena || !subcadena) {
        resultado.textContent = 'Por favor, introduce tanto la cadena como la subcadena.';
        return;
    }

    const posicion = kmpBusqueda(cadena, subcadena);

    if (posicion !== -1) {
        resultado.textContent = `Subcadena encontrada en la posición ${posicion}.`;
    } else {
        resultado.textContent = 'Subcadena no encontrada.';
    }
}
