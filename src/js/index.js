
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
console.log(body);
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png")

    } else {
        console.log("clicou no botao");
        body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png")

    }


});



