let  p = document.createElement("p");


function criarparagrafo() {
    
    p.innerText = "Novo Paragrafo Inserido";
    document.body.appendChild(p);

}

let img = document.createElement("img");

function adicionarimagem(){ 
    img.src = "luizgonzaga.jpg";
    img.alt = "Rei Do Sertão";
    img.style.borderRadius = "20px";
    img.style.margin = "10px";
    document.body.appendChild(img)
    
}





let div03 = document.getElementById("div03");
 let paragrafo = document.createElement("p");


function inserirparagrafo(){
   
    paragrafo.innerText = "Ola Panaca";
    div03.appendChild(paragrafo);


}
function removerparagrafo() {     
    let paragrafos = document.querySelectorAll("p")
    paragrafos.forEach(paragrafo => paragrafo.remove()) 
}
