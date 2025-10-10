var area = document.getElementById("area");
        function clicar(){
            area.innerText = "Clicou!";
            area.style.background = "red"
        }
    function entrar (){
        area.innerText = "Entrou!";
        area.style.background = "blue"
    }
    function sair(){
        area.innerText = "Saiu!";
        area.style.background = "black"
    }
    ///Escutar i Eventos
    area.addEventListener("click", clicar);
    area.addEventListener("mouseenter", entrar);
    area.addEventListener("mouseout", sair);