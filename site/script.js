
    const modal = document.getElementById("modal-contato");
    const botaoAbrir = document.getElementById("abrir-contato");
    const botaoFechar = document.getElementById("fechar-contato");
    const form = document.getElementById("form-contato");

    botaoAbrir.addEventListener("click", () => modal.showModal());
    botaoFechar.addEventListener("click", () => modal.close());

    // Fecha ao clicar fora da caixa
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = Object.fromEntries(new FormData(form));
        console.log(dados); // por enquanto só mostra no console
        alert("Mensagem enviada! Obrigado pelo contato.");
        form.reset();
        modal.close();
    });
