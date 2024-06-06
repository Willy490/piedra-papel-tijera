const botones = document.querySelectorAll('button');
const resultadoDiv = document.getElementById('resultado');


botones.forEach(boton => {
    boton.addEventListener('click', jugar);
});

function jugar(event) {
    const eleccionUsuario = event.target.id;
    const eleccionComputadora = obtenerEleccionComputadora();
    const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);

    mostrarResultado(eleccionUsuario, eleccionComputadora, resultado);
}

function obtenerEleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        return 'Empate';
    }
    if ((usuario === 'piedra' && computadora === 'tijeras') ||
        (usuario === 'papel' && computadora === 'piedra') ||
        (usuario === 'tijeras' && computadora === 'papel')) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

function mostrarResultado(usuario, computadora, resultado) {
    resultadoDiv.innerHTML = `
        Tú elegiste: ${usuario}<br>
        La computadora eligió: ${computadora}<br>
        Resultado: ${resultado}
    `;
}


