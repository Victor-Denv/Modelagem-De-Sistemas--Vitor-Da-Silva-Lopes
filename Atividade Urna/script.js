
const display = document.getElementById('display');
const modalResultado = document.getElementById('modal-resultado');
const resultadoFinal = document.getElementById('resultado-final');


let numeroDigitado = '';

const candidatos = {
    '13': { nome: 'Luiz Inacio Lula Da Silva', foto: 'download.jpg' },
    '22': { nome: 'Bolsonaro', foto: 'download (1).jpg' },
    '09': { nome: 'Boca de 09', foto: 'images.jpg' }
};

const votos = {
    '13': 0,
    '22': 0,
    '33': 0,
    'branco': 0,
    'nulo': 0
};



 
function digitar(numero) {
    if (numeroDigitado.length < 2) {
        numeroDigitado += numero;
        atualizarDisplay();
    }
}


 
function limpar() {
    numeroDigitado = '';
    atualizarDisplay();
}


function votoBranco() {
    numeroDigitado = ''; 
    display.innerHTML = `
        <div class="candidato-info">
            <div class="candidato-dados">
                <h1>VOTO EM BRANCO</h1>
            </div>
        </div>`;
}


function confirmarVoto() {
    if (numeroDigitado === '') {
        
        votos.branco++;
        finalizarVotacao();
    } else if (candidatos[numeroDigitado]) {
       
        votos[numeroDigitado]++;
        finalizarVotacao();
    } else {
        
        votos.nulo++;
        finalizarVotacao();
    }
}


function atualizarDisplay() {
    if (numeroDigitado === '') {
        display.innerHTML = `
            <div class="display-inicial">
                <h1>Votação Iniciada</h1>
                <p>Digite o número do seu candidato.</p>
            </div>`;
    } else {
        if (candidatos[numeroDigitado]) {
            const candidato = candidatos[numeroDigitado];
            display.innerHTML = `
                <div class="candidato-info">
                    <img src="${candidato.foto}" alt="${candidato.nome}" class="candidato-foto">
                    <div class="candidato-dados">
                        <p><strong>Número:</strong> ${numeroDigitado}</p>
                        <p><strong>Nome:</strong> ${candidato.nome}</p>
                    </div>
                </div>`;
        } else {
            display.innerHTML = `
                <div class="candidato-dados">
                    <h1>NÚMERO INVÁLIDO</h1>
                    <p>Seu voto será considerado NULO.</p>
                </div>`;
        }
    }
}


function finalizarVotacao() {
    display.innerHTML = '<h1 class="mensagem-fim">FIM</h1>';
    
    setTimeout(() => {
        numeroDigitado = '';
        atualizarDisplay();
    }, 2000); 
}


function encerrarVotacao() {
    let resultadoTexto = '';
    for (const candidato in candidatos) {
        resultadoTexto += `${candidatos[candidato].nome}: ${votos[candidato]} voto(s)\n`;
    }
    resultadoTexto += `\n`;
    resultadoTexto += `Votos em Branco: ${votos.branco} voto(s)\n`;
    resultadoTexto += `Votos Nulos: ${votos.nulo} voto(s)\n`;

    resultadoFinal.textContent = resultadoTexto;
    modalResultado.style.display = 'block';
}


function fecharModal() {
    modalResultado.style.display = 'none';
}



const btnEncerrar = document.createElement('button');
btnEncerrar.textContent = 'Encerrar Votação e Ver Resultado';
btnEncerrar.style.position = 'absolute';
btnEncerrar.style.bottom = '10px';
btnEncerrar.style.left = '10px';
btnEncerrar.style.padding = '10px';
btnEncerrar.style.cursor = 'pointer';
document.body.appendChild(btnEncerrar);
btnEncerrar.onclick = encerrarVotacao;