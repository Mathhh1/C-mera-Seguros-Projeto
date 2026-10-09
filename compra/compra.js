// Guardo os carros aqui para não perder quando voltar para o início
let carrinho = [];
try {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
} catch (erro) {
    carrinho = [];
}

const listaCarros = document.getElementById('lista-carrinho');
const textoTotal = document.getElementById('total');
const carrinhoVazio = document.getElementById('carrinho-vazio');
const mensagem = document.getElementById('mensagem-compra');
const formulario = document.getElementById('formulario-compra');
const numeroCarros = document.getElementById('quantidade-carrinho');
const avisoCompra = document.getElementById('aviso-compra');
const caixaCarrinho = document.getElementById('meu-carrinho');

function mostrarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    mensagem.textContent = '';
    salvarCarrinho();
}

function mostrarCarrinho() {
    numeroCarros.textContent = carrinho.length;
    numeroCarros.hidden = carrinho.length === 0;
    document.getElementById('abrir-carrinho').setAttribute('aria-label', 'Abrir carrinho, ' + carrinho.length + ' itens');
    listaCarros.innerHTML = '';
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        const linhaCarro = document.createElement('li');
        const nomeEPreco = document.createElement('div');
        nomeEPreco.textContent = carrinho[i].nome + ' - ' + mostrarPreco(carrinho[i].preco);
        linhaCarro.appendChild(nomeEPreco);

        // Esse botão coloca mais um carro igual
        const botaoAdicionar = document.createElement('button');
        botaoAdicionar.type = 'button';
        botaoAdicionar.className = 'botao-carro';
        botaoAdicionar.textContent = '+ 1';
        botaoAdicionar.addEventListener('click', function () {
            adicionarAoCarrinho(carrinho[i].nome, carrinho[i].preco);
        });
        linhaCarro.appendChild(botaoAdicionar);

        const botaoRemover = document.createElement('button');
        botaoRemover.type = 'button';
        botaoRemover.className = 'botao-carro';
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', function () {
            carrinho.splice(i, 1);
            mensagem.textContent = '';
            salvarCarrinho();
        });
        linhaCarro.appendChild(botaoRemover);

        listaCarros.appendChild(linhaCarro);
        total = total + carrinho[i].preco;
    }

    textoTotal.textContent = 'Total: ' + mostrarPreco(total);
    if (carrinho.length === 0) {
        carrinhoVazio.style.display = 'block';
    } else {
        carrinhoVazio.style.display = 'none';
    }
}

document.getElementById('abrir-carrinho').addEventListener('click', function () {
    caixaCarrinho.showModal();
});

document.getElementById('fechar-carrinho').addEventListener('click', function () {
    caixaCarrinho.close();
});

document.getElementById('limpar-carrinho').addEventListener('click', function () {
    carrinho = [];
    mensagem.textContent = '';
    salvarCarrinho();
});

// Deixei o formulário só na página de compra
if (formulario) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        if (carrinho.length === 0) {
            mensagem.textContent = 'Adicione um carro ao carrinho antes de comprar.';
            return;
        }

        carrinho = [];
        salvarCarrinho();
        formulario.reset();
        mensagem.textContent = '';
        caixaCarrinho.close();
        avisoCompra.showModal();
    });
}

// Abre o carrinho quando vier pelo botão da página inicial
if (window.location.search === '?carrinho=aberto') {
    caixaCarrinho.showModal();
}

// Mostra os carros de novo quando voltar pelo navegador
window.addEventListener('pageshow', function () {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    mostrarCarrinho();
});

mostrarCarrinho();
