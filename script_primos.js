function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (numero < 2) {
        resultado.textContent = `${numero} no es un número primo.`;
        return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        resultado.textContent = `${numero} es un número primo.`;
    } else {
        resultado.textContent = `${numero} no es un número primo.`;
    }
}
