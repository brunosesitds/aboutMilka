document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btn-entrar");

    btn.addEventListener("click", function () {

        const nome = document.getElementById("nome").value;

        if (!nome || nome.trim() === "") {
            alert("Digite seu nome!");
            return;

            if (!localStorage.getItem("usuario")) {
                window.location.href = "login.html";
            }
        }

        localStorage.setItem("usuario", nome);

        window.location.href = "loja.html";
    });

});
