const modalContato = document.getElementById("modal-contato");
const modalInteresse = document.getElementById("modal-interesse");
const formContato = document.getElementById("form-contato");
const formInteresse = document.getElementById("form-interesse");

const formBuscaProdutos = document.getElementById("form-busca-produtos");
const campoBuscaProdutos = document.getElementById("busca-produtos");
const filtroCategoria = document.getElementById("filtro-categoria");
const cardsProdutos = document.querySelectorAll(".card-carro[data-categoria]");
const avisoSemProdutos = document.getElementById("nenhum-produto");

// Tira acentos para buscas como "sedan" também encontrarem "sedã".
function normalizarTexto(texto) {
    return texto.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrarProdutos() {
    const busca = normalizarTexto(campoBuscaProdutos.value.trim());
    const categoriaSelecionada = filtroCategoria.value;
    let produtosVisiveis = 0;

    // Cada cartão já traz sua categoria no HTML; aqui combinamos os dois filtros.
    cardsProdutos.forEach((card) => {
        const textoProduto = normalizarTexto(card.textContent);
        const correspondeBusca = textoProduto.includes(busca);
        const correspondeCategoria = categoriaSelecionada === "todos" || card.dataset.categoria === categoriaSelecionada;
        const mostrarProduto = correspondeBusca && correspondeCategoria;

        card.hidden = !mostrarProduto;
        if (mostrarProduto) produtosVisiveis += 1;
    });

    avisoSemProdutos.hidden = produtosVisiveis > 0;
}

// A lista acompanha a digitação e a troca de categoria sem recarregar a página.
campoBuscaProdutos.addEventListener("input", filtrarProdutos);
filtroCategoria.addEventListener("change", filtrarProdutos);
formBuscaProdutos.addEventListener("submit", (event) => {
    event.preventDefault();
    filtrarProdutos();
});

document.getElementById("abrir-contato")?.addEventListener("click", () => modalContato.showModal());
document.getElementById("fechar-contato")?.addEventListener("click", () => modalContato.close());
document.getElementById("fechar-interesse")?.addEventListener("click", () => modalInteresse.close());

document.querySelectorAll(".btn-interesse[data-carro]").forEach((botao) => {
    botao.addEventListener("click", () => {
        // Aproveita o nome do cartão para deixar a mensagem pronta no formulário.
        document.getElementById("interesse-mensagem").value = `Tenho interesse no veículo ${botao.dataset.carro}.`;
        modalInteresse.showModal();
    });
});

[modalContato, modalInteresse].forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close();
    });
});

function enviarFormulario(event, modal, form) {
    event.preventDefault();
    const dados = Object.fromEntries(new FormData(form));
    // Por enquanto o envio é só uma demonstração, sem serviço conectado.
    console.log("Solicitação recebida (demonstração):", dados);
    alert("Mensagem enviada! Obrigado pelo contato.");
    form.reset();
    modal.close();
}

formContato.addEventListener("submit", (event) => enviarFormulario(event, modalContato, formContato));
formInteresse.addEventListener("submit", (event) => enviarFormulario(event, modalInteresse, formInteresse));
