let carrinho =
JSON.parse(
localStorage.getItem("carrinho")
) || [];

let total = 0;

const itens =
document.getElementById("itens");

carrinho.forEach(produto => {

    total += produto.preco;

    itens.innerHTML += `
        <div class="item">

            <img
            src="${produto.imagem}"
            width="120">

            <div>

                <h3>${produto.nome}</h3>

                <p>
                    R$ ${produto.preco.toFixed(2)}
                </p>

            </div>

        </div>
    `;
});

document.getElementById("total")
.textContent =
`Total: R$ ${total.toFixed(2)}`;

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const itens = document.getElementById("itens");

function renderizarCarrinho() {
    itens.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        itens.innerHTML = "<p>Seu carrinho está vazio! 🍫</p>";
        document.getElementById("total").textContent = "Total: R$ 0,00";
        return;
    }

    carrinho.forEach((produto, index) => {
        total += produto.preco;
        itens.innerHTML += `
            <div class="item">
                <img src="../${produto.imagem}" width="120"> <div>
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="removerItem(${index})">Remover</button>
                </div>
            </div>
        `;
    });

    document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderizarCarrinho();
}

renderizarCarrinho();