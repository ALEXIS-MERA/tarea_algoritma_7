function verificarFizzBuzz() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero < 1 || numero > 100) {
        resultado.textContent = 'Introduce un número entre 1 y 100.';
        return;
    }

    let mensaje = '';

    if (numero % 3 === 0 && numero % 5 === 0) {
        mensaje = 'FizzBuzz';
    } else if (numero % 3 === 0) {
        mensaje = 'Fizz';
    } else if (numero % 5 === 0) {
        mensaje = 'Buzz';
    } else {
        mensaje = numero;
    }

    resultado.textContent = mensaje;
}
