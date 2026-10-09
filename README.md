# 🚘 Câmere Seguros — catálogo de veículos

> Um protótipo acadêmico para explorar veículos, demonstrar interesse e simular uma compra.

## 👥 Integrantes

Integrantes informados pelo grupo. 

| Integrante | GitHub |
|---|---|
| Matheus | [@Mathhh1](https://github.com/Mathhh1) |
| Cauã Pedro | [@yuukine67](https://github.com/yuukine67) |
| Victor Carlos | [@victorcarlos1998-lang](https://github.com/victorcarlos1998-lang) |
| Alberison | [@Alberison90](https://github.com/Alberison90) |

## 🎯 Sobre o projeto

O projeto apresenta um catálogo demonstrativo de veículos da empresa fictícia Câmere Seguros. A proposta é ajudar pessoas interessadas em comprar um carro a consultar modelos, comparar informações básicas e iniciar um contato ou uma simulação de compra.

O público principal são pessoas procurando veículos usados. O catálogo procura atender à necessidade de encontrar opções por nome ou categoria e de ter acesso rápido a informações como preço e ano. A compra não é real: o formulário não processa pagamentos nem envia dados para um servidor.

## ✨ O que dá para fazer

- Página inicial com carrossel de imagens dos veículos.
- Catálogo com nome, categoria, ano, detalhes e preço dos carros.
- Busca por nome, categoria, detalhes ou preço, sem diferenciar maiúsculas e acentos.
- Filtro de veículos por categoria: sedãs ou hatches.
- Mensagem de estado vazio quando a busca e o filtro não encontram carros.
- Formulário de contato e formulário de interesse em um veículo.
- Atalho de acessibilidade em Libras fornecido pelo VLibras.
- Página de compra demonstrativa com opção para adicionar veículos ao carrinho.
- Carrinho com total, remoção de itens, limpeza e persistência no navegador usando `localStorage`.
- Formulário de demonstração para concluir a simulação de compra.

## 🧭 Como navegar

1. Explore os carros no catálogo da página inicial ou passe as fotos no carrossel.
2. Digite um nome, categoria ou preço na busca, ou escolha **Sedãs** ou **Hatches** no filtro.
3. Use **Tenho interesse** para abrir o formulário daquele veículo.
4. Acesse **Encontre seu próximo carro** para abrir a página de compra e adicionar modelos ao carrinho.
5. Abra o carrinho para conferir itens e total. A finalização é apenas uma simulação.

## 🧰 Tecnologias utilizadas

- **HTML5** para a estrutura semântica das páginas, formulários, catálogo e diálogos.
- **CSS3** para o layout, estilos e adaptação a telas menores.
- **JavaScript** para busca, filtros, carrossel, formulários e carrinho.
- **Git e GitHub** para versionamento e colaboração.

Não foi usado um framework JavaScript. Para o escopo atual, HTML, CSS e JavaScript foram suficientes para construir as páginas e atualizar a interface com eventos do navegador. O projeto não tem back-end, banco de dados ou integração de pagamento.

## 📁 Estrutura do projeto

```text
.
├── README.md
├── site/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── carrossel.js
│   └── assents/
│       └── imagens/
└── compra/
    ├── compra.html
    ├── compra.css
    ├── carrinho.css
    ├── compra.js
    └── imagens/
```

`site/index.html` contém a página inicial e o catálogo; `site/styles.css` define o visual; `site/script.js` implementa busca, filtro e formulários; `site/carrossel.js` controla o carrossel. A pasta `compra/` contém a página de compra, os estilos do carrinho, a lógica do carrinho e as imagens dos veículos.

## ▶️ Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta raiz do projeto em um servidor local estático, como a extensão Live Server do VS Code.
3. Acesse `site/index.html` pelo servidor. A página de compra é acessada pelos botões de compra do catálogo.

Como os arquivos usam caminhos que partem da raiz do projeto, execute a partir da pasta raiz do repositório. A simulação de compra não envia dados nem realiza pagamentos.

## 🧩 Decisões de desenvolvimento

- O cenário escolhido foi um catálogo de produtos aplicado a veículos, com uma página separada para a simulação de compra.
- A busca e o filtro são executados no navegador sobre os veículos já apresentados na página.
- O carrinho usa `localStorage` para manter os itens ao navegar entre as páginas no mesmo navegador.
- Os formulários de contato e interesse apresentam uma confirmação demonstrativa; não há serviço de envio conectado.
- O escopo foi mantido em tecnologias nativas para demonstrar fundamentos de HTML, CSS, JavaScript, manipulação do DOM e eventos.
- Os itens do carrinho ficam salvos no navegador atual; eles não são compartilhados entre dispositivos.

## ⚖️ Comparação com frameworks

### Por que HTML, CSS e JavaScript foram suficientes?

O catálogo tem poucos veículos e poucas interações. HTML organiza o conteúdo e os formulários, CSS cuida da apresentação e JavaScript filtra os carros, controla o carrossel, abre diálogos e atualiza o carrinho. Para esse tamanho de aplicação, essas tecnologias permitem implementar as funções sem adicionar uma etapa de configuração de framework.

### O que poderia mudar com React?

1. Catálogo, cartão de veículo, busca e carrinho poderiam ser separados em componentes reutilizáveis.
2. O estado do filtro e do carrinho poderia ser mantido e refletido na interface de forma declarativa, reduzindo atualizações manuais do DOM.
3. A divisão em componentes poderia facilitar a manutenção caso o catálogo ganhasse mais páginas e interações.

Essas vantagens seriam mais relevantes conforme a aplicação crescesse. React não é automaticamente a melhor opção para um catálogo pequeno: introduziria ferramentas e conceitos adicionais que não são necessários para o escopo atual.

### Vue ou Angular seriam alternativas?

Vue poderia ser uma alternativa para organizar a interface em componentes mantendo uma adoção gradual. Angular também poderia estruturar uma aplicação maior, mas sua estrutura mais abrangente seria maior do que a necessidade deste projeto. A escolha depende do tamanho, da organização da equipe e da evolução esperada; nenhuma tecnologia é a melhor para todos os casos.

## 🛠️ Dificuldades e soluções

Durante a integração das versões, a estrutura das páginas, os identificadores dos formulários e os caminhos das imagens precisaram ser alinhados. A solução foi manter os recursos complementares nas páginas correspondentes, ajustar as referências entre arquivos e ligar os formulários e controles aos elementos existentes no HTML.

## 🤝 Divisão do trabalho

O histórico local consultado identifica commits de Matheus (`Mathhh1`) e Cãua Pedro (`yuukine67`). Os registros de Cãua Pedro descrevem a página de compra, o carrinho, o carrossel e a inclusão de imagens; os de Matheus incluem a base inicial e refatorações. Os commits de Victor Carlos e Alberison não aparecem no histórico local consultado. Acrescentem aqui as tarefas específicas de cada integrante e confiram se todos realizaram commits no repositório de entrega.

## 🗓️ Histórico do desenvolvimento

- **28/09/2026:** início do repositório.
- **30/09 a 07/10/2026:** refatorações, organização e versões iniciais do site.
- **08/10/2026:** integração de alterações do projeto.
- **09/10/2026:** commits de compra de veículos, carrinho, carrossel, ajustes visuais e imagens.

O histórico local contém as branches `main`, `teste` e `pr/1`, além de referências remotas. Antes da entrega, confirmem que a versão final está na branch de entrega e que o repositório do GitHub está público.

## 🔮 Melhorias futuras

- Permitir cadastrar e editar veículos sem alterar manualmente o HTML.
- Adicionar mais critérios de filtro, como faixa de preço, ano e câmbio.
- Conectar os formulários a um serviço de atendimento, com consentimento e tratamento adequado dos dados.
- Integrar um back-end e um fluxo real de compra, caso o projeto venha a ser expandido.
- Ampliar os testes de acessibilidade e a validação em diferentes navegadores e tamanhos de tela.

## 🤖 Uso de IA

| Data | Modelo utilizado | Prompt ou uso resumido | Onde foi usado |
|---|---|---|---|
| 09/10/2026 | Codex (GPT-6) | Ajustar o visual do site para ficar mais próximo dos arquivos enviados. | **Estilização de IA. (Cores e design.)** — estilos em `site/styles.css`. |
| 09/10/2026 | Codex (GPT-6) | Mesclar as versões e conectar formulários e controles à página atual. | **Ajuste de itens** — integração em `site/index.html` e `site/script.js`. |
| 09/10/2026 | Codex (GPT-6) | Criar interação de catálogo e navegação para a página de compra. | **Criação de site (ao clicar, é redirecionado para outra página)** — páginas `site/` e `compra/`. |
| 09/10/2026 | Modelo não registrado no histórico | O histórico de commits informa que algumas imagens foram geradas com IA; o prompt e o modelo não foram registrados. | Imagens de veículos incluídas no projeto. Confirmar os dados com quem gerou as imagens. |

As sugestões de código foram revisadas e adaptadas à estrutura existente, incluindo caminhos, identificadores de formulários, catálogo e navegação entre páginas. As informações de modelo e prompt das imagens devem ser completadas pela pessoa que as gerou.

## 👨‍🏫 Professor

Victor Brayner
