const animales = [
    { nombre: "PERRO", pista: "Soy el mejor amigo del hombre." },
    { nombre: "GATO", pista: "Soy independiente y me gusta cazar ratones." },
    { nombre: "ELEFANTE", pista: "Soy el animal terrestre más grande." },
    { nombre: "AGUILA", pista: "Soy un ave de presa con una vista excelente." },
    { nombre: "CABALLO", pista: "Soy un animal que se usa para montar y trabajar en el campo." }
];

let animalSeleccionado = animales[Math.floor(Math.random() * animales.length)];

// Muestra la pista del animal seleccionado
function mostrarPista() {
    const pistaElemento = document.getElementById('pista');
    pistaElemento.textContent = animalSeleccionado.pista;
}

// Verifica si la respuesta es correcta
function verificar() {
    const respuesta = document.getElementById('respuesta').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    if (respuesta === animalSeleccionado.nombre) {
        resultado.textContent = '¡Correcto! Adivinaste el animal.';
    } else {
        resultado.textContent = 'Incorrecto. ¡Inténtalo de nuevo!';
    }
}

// Llamar a la función para mostrar la pista cuando se carga la página
window.onload = mostrarPista;
