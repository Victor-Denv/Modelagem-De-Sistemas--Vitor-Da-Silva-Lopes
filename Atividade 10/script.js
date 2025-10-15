function adicionaritem() {
  
    var  input = document.getElementById("item");
    var texto = input.value.trim();

    if (texto !== "") {
        
        var lista = document.getElementById("lista");
        var novoitem = document.createElement("li");
        novoitem.textContent = texto;
        lista.appendChild(novoitem);
        
        
        input.value = ""; 
    }
}

function removeritem() {
    
    var lista = document.getElementById("lista");
    var ultimoitem = lista.lastElementChild;
    if (ultimoitem) {
        ultimoitem.remove();
    }
}


var botao = document.getElementById("botao");
botao.onclick = adicionaritem;
botao.ondblclick = removeritem;