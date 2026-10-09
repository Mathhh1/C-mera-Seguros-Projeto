const fotosCarros = document.querySelectorAll('.foto-inicio');
const parteCarrossel = document.querySelector('.carrossel');
let carroAtual = 0;

function mostrarCarro() {
    for (let i = 0; i < fotosCarros.length; i++) {
        fotosCarros[i].hidden = i !== carroAtual;
    }
}

function passarCarro() {
    carroAtual = carroAtual + 1;
    if (carroAtual === fotosCarros.length) {
        carroAtual = 0;
    }
    mostrarCarro();
}

document.getElementById('proximo-carro').addEventListener('click', passarCarro);

document.getElementById('carro-anterior').addEventListener('click', function () {
    carroAtual = carroAtual - 1;
    if (carroAtual < 0) {
        carroAtual = fotosCarros.length - 1;
    }
    mostrarCarro();
});
