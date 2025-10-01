console.log ("Seja Bem Vindo Panaca")
function BoasVindas() {
    alert ("Seja Bem Vindo Panaca")
}
function BoasVindas2(nome,sobrenome) {
    document.writeln("Seja Bem Vindo De Novo " + nome + " " + sobrenome)
}
function soma (a,b) {
 return a + b
}
function realizarSoma() {
    var a = Number(prompt("Informe um N1"))
    var b = Number(prompt("Informa um n2 : "))
    var resultado = soma(a,b)
    alert (resultado)
}


function sub (a,b) {
 return a - b
}
function realizarSub() {
    var a = Number(prompt("Informe um N1"))
    var b = Number(prompt("Informa um n2 : "))
    var resultado = sub(a,b)
    alert (resultado)
}

function mult (a,b) {
 return a * b

}
function realizarMult() {
    var a = Number(prompt("Informe um N1"))
    var b = Number(prompt("Informa um n2 : "))
    var resultado = mult(a,b)
    alert (resultado)
}

function div (a,b) {
 return a / b
}
function realizarDiv() {
    var a = Number(prompt("Informe um N1"))
    var b = Number(prompt("Informa um n2 : "))
    var resultado = div(a,b)
    alert (resultado)
}