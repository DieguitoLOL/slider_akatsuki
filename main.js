let slider = document.querySelector('.slider');
let imagenes = slider.querySelectorAll('img');
let botones = document.querySelectorAll('.boton');
let indiceImagenActual = 0;
let temporizador;

function mostrarImagen(indice) {
    imagenes.forEach((imagen, i) => {
        if (i === indice) {
            imagen.style.display = 'block';
        } else {
            imagen.style.display = 'none';
        }
    });
}

function actualizarColorBoton(indice) {
    botones.forEach((boton, i) => {
        if (i === indice) {
            boton.style.backgroundColor = 'red';
        } else {
            boton.style.backgroundColor = '#ccc';
        }
    });
}

function iniciarTemporizador() {
    clearInterval(temporizador);
    temporizador = setInterval(() => {
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
        mostrarImagen(indiceImagenActual);
        actualizarColorBoton(indiceImagenActual);
    }, 3000);
}

botones.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        clearInterval(temporizador);
        indiceImagenActual = indice;
        mostrarImagen(indiceImagenActual);
        actualizarColorBoton(indiceImagenActual);
        setTimeout(() => {
            iniciarTemporizador();
        }, 10000); 
    });
});

mostrarImagen(indiceImagenActual);
actualizarColorBoton(indiceImagenActual);
iniciarTemporizador();
