var titulo = window.document.getElementsByTagName("h1");
document.write("Texto do h1 = " + titulo[0].innerText)

document.write("<br> Texto Segundo do h1 = " + titulo[1].innerText)
titulo[0].style.color = "blue"

var div01 = document.getElementById("div01")
div01.style.background = "Red"

var p = document.getElementsByClassName("p1")

//queryselector
var h = document.querySelector("h1")
document.write("<br> Texto do h1 Com QuerySelector = " + h[1].innerText)

var d = document.querySelector("div#div01")
document.write("<br> Texto com QuerySelector Div01 = " + d.innerHTML)