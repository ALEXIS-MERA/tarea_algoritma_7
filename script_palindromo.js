function verificarPalindromo() {
    const entrada = document.getElementById('entrada').value;
    const resultado = document.getElementById('resultado');

    // Eliminar espacios y convertir a minúsculas
    const entradaLimpia = entrada.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Verificar si es un palíndromo
    const esPalindromo = entradaLimpia === entradaLimpia.split('').reverse().join('');

    if (esPalindromo) {
        resultado.textContent = '¡Correcto! Es un palíndromo.';
    } else {
        resultado.textContent = 'Incorrecto. No es un palíndromo.';
    }
}
