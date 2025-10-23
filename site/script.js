var login = document.getElementById("login")
var senha = document.getElementById ("senha")
var cofirsenha = document.getElementById ("confirsenha")
var valorsenha = senha.value
var valorconfirsenha = cofirsenha.value


function enviar() {
    if (login.value == ""){
        alert('Preencha O Login');
        login.focus;
        return false;
    }
}
function confirsenha() {
    if(valorsenha == valorconfirsenha){
        mensagem.textContent = "As Senhas  São Iguais"

    }else {
        mensagem.textContent = "As Senhas Não São Iguais"
        
    }

}