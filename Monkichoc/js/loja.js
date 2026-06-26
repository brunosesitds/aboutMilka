document.getElementById("usuario")
.textContent =
localStorage.getItem("usuario");

fetch("../dados/produtos.json")
.then(res => res.json())
.then(produtos => {

    const area =
    document.getElementById("produtos");

    produtos.forEach((produto)=>{

        area.innerHTML += `
            <div class="card">

                <img
                src="${produto.imagem}"
                alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <p>
                    R$ ${produto.preco.toFixed(2)}
                </p>

                <button
                onclick="adicionar(${produto.id})">

                    Adicionar

                </button>

            </div>
        `;
    });

    window.listaProdutos = produtos;
});

function adicionar(id){

    const produto =
    listaProdutos.find(p => p.id === id);

    let carrinho =
    JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert("Produto adicionado!");
}
