var botao = document.getElementById("botao");
var paragra = document.getElementById("paragra");

function clicar(){
    paragra.innerText = "Que Bom Que Voce Esta Bem!!!";
}
botao.addEventListener("click", clicar);
