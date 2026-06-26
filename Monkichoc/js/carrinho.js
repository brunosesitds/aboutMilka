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