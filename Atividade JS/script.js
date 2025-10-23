// --- Questão 1: Sistema de Notas da Escola ---
function executarQuestao1() {
    const alunos = [];
    let relatorioFinal = "Relatório de Notas:\n\n";

    for (let i = 0; i < 5; i++) {
        const nomeAluno = prompt(`Digite o nome do ${i + 1}º aluno:`);
        if (nomeAluno === null) return;
        const notas = [];
        let somaNotas = 0;

        for (let j = 0; j < 4; j++) {
            const nota = parseFloat(prompt(`Digite a ${j + 1}ª nota de ${nomeAluno}:`));
            if (isNaN(nota)) {
                alert("Nota inválida, digite um número.");
                j--; // Pede a mesma nota novamente
                continue;
            }
            notas.push(nota);
            somaNotas += nota;
        }

        const media = somaNotas / 4;
        let situacao;

        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5) {
            situacao = "Recuperação";
        } else {
            situacao = "Reprovado";
        }

        alunos.push({
            nome: nomeAluno,
            notas: notas,
            media: media.toFixed(2),
            situacao: situacao
        });
    }

    for (const aluno of alunos) {
        relatorioFinal += `Aluno: ${aluno.nome}\n`;
        relatorioFinal += `Notas: ${aluno.notas.join(", ")}\n`;
        relatorioFinal += `Média: ${aluno.media}\n`;
        relatorioFinal += `Situação: ${aluno.situacao}\n\n`;
    }

    alert(relatorioFinal);
}

// --- Questão 2: Carrinho de Compras ---
function executarQuestao2() {
    const produtos = [
        { nome: "Camiseta", preco: 29.90 },
        { nome: "Calça Jeans", preco: 129.90 },
        { nome: "Tênis", preco: 249.90 },
        { nome: "Boné", preco: 49.90 },
        { nome: "Moletom", preco: 149.90 }
    ];

    let totalCompra = 0;
    const produtosComprados = [];

    for (const produto of produtos) {
        const quantidade = parseInt(prompt(`Quantas unidades de ${produto.nome} (R$ ${produto.preco.toFixed(2)}) você quer?`));
        if (quantidade > 0) {
            totalCompra += quantidade * produto.preco;
            produtosComprados.push(`${quantidade}x ${produto.nome}`);
        }
    }

    if (produtosComprados.length === 0) {
        alert("Nenhum produto foi adicionado ao carrinho.");
        return;
    }

    let mensagemFinal = `Produtos Comprados:\n${produtosComprados.join("\n")}\n\n`;
    mensagemFinal += `Total: R$ ${totalCompra.toFixed(2)}\n`;

    if (totalCompra > 500) {
        const desconto = totalCompra * 0.10;
        totalCompra -= desconto;
        mensagemFinal += `Desconto de 10%: -R$ ${desconto.toFixed(2)}\n`;
    }

    mensagemFinal += `Valor Final a Pagar: R$ ${totalCompra.toFixed(2)}`;
    alert(mensagemFinal);
}

// --- Questão 3: Caixa Eletrônico ---
function executarQuestao3() {
    // TODA a lógica foi movida para DENTRO da função
    const codigoClienteCorreto = "1234";
    const senhaCorreta = "5678";
    let saldo = 1000.00;

    const codigoCliente = prompt("Digite o código do cliente:");
    const senha = prompt("Digite a senha:");

    if (codigoCliente !== codigoClienteCorreto || senha !== senhaCorreta) {
        alert("Código ou senha incorretos.");
        return; // Encerra a função se o login falhar
    }
    
    alert("Login efetuado com sucesso!");

    let opcao;
    do {
        opcao = prompt("Escolha uma opção:\n1. Ver Saldo\n2. Saque\n3. Depósito\n4. Sair");
        switch (opcao) {
            case "1":
                alert(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
                break;
            case "2":
                const valorSaque = parseFloat(prompt("Qual valor deseja sacar?"));
                if (isNaN(valorSaque) || valorSaque <= 0) {
                    alert("Valor inválido.");
                } else if (valorSaque > saldo) {
                    alert("Saldo insuficiente.");
                } else {
                    saldo -= valorSaque;
                    alert(`Saque de R$ ${valorSaque.toFixed(2)} realizado.`);
                }
                break;
            case "3":
                const valorDeposito = parseFloat(prompt("Qual valor deseja depositar?"));
                if (isNaN(valorDeposito) || valorDeposito <= 0) {
                    alert("Valor inválido.");
                } else {
                    saldo += valorDeposito;
                    alert(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado.`);
                }
                break;
            case "4":
                alert("Saindo do sistema...");
                break;
            default:
                alert("Opção inválida.");
        }
    } while (opcao !== "4");
}

// --- Questão 4: Cadastro de Clientes VIP ---
function executarQuestao4() {
    const clientes = [];
    let continuar;

    do {
        const nome = prompt("Digite o nome do cliente:");
        if (!nome) break;
        const idade = parseInt(prompt("Digite a idade do cliente:"));
        clientes.push({ nome, idade });
        continuar = prompt("Deseja cadastrar outro cliente? (sim/nao)");
    } while (continuar && continuar.toLowerCase() === 'sim');

    if (clientes.length === 0) return alert("Nenhum cliente cadastrado.");
    
    let clientesVip = "Clientes com 18 anos ou mais:\n";
    let somaIdades = 0;
    clientes.forEach(cliente => {
        somaIdades += cliente.idade;
        if (cliente.idade >= 18) {
            clientesVip += `- ${cliente.nome}, ${cliente.idade} anos\n`;
        }
    });

    const mediaIdades = somaIdades / clientes.length;
    alert(`${clientesVip}\nTotal de clientes: ${clientes.length}\nMédia de idade: ${mediaIdades.toFixed(1)} anos`);
}

// --- Questão 5: Controle de Estoque Interativo ---
function executarQuestao5() {
    let estoque = 100;
    alert(`Estoque inicial: ${estoque} unidades.`);

    while (estoque > 0) {
        const entrada = prompt(`Estoque: ${estoque}. Unidades vendidas? (ou 'sair')`);
        if (entrada === null || entrada.toLowerCase() === 'sair') break;
        
        const quantidadeVendida = parseInt(entrada);
        if (isNaN(quantidadeVendida) || quantidadeVendida < 0) {
            alert("Número inválido.");
            continue;
        }
        if (quantidadeVendida > estoque) {
            alert("Venda maior que o estoque!");
        } else {
            estoque -= quantidadeVendida;
            alert(`Venda registrada. Estoque atual: ${estoque}.`);
            if (estoque > 0 && estoque < 20) {
                alert("Atenção: Estoque baixo!");
            }
        }
    }
    alert(estoque === 0 ? "Estoque esgotado!" : "Operação finalizada.");
}

// --- Questão 6: Sistema de Pesquisa de Satisfação ---
function executarQuestao6() {
    const notas = [];
    do {
        const nome = prompt("Qual o seu nome?");
        if (!nome) break;
        const nota = parseInt(prompt(`Olá ${nome}, qual sua nota para o atendimento (1 a 5)?`));
        if (nota >= 1 && nota <= 5) notas.push(nota);
        else alert("Nota inválida.");
    } while (prompt("Registrar outra avaliação? (S/N)")?.toUpperCase() === 'S');
    
    if (notas.length === 0) return alert("Nenhuma avaliação registrada.");

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    const classificacao = media >= 4 ? "Excelente" : media >= 2.5 ? "Regular" : "Ruim";
    alert(`Média de satisfação: ${media.toFixed(2)}\nClassificação: ${classificacao}`);
}

// --- Questão 7: Sistema de Pontuação de Jogo ---
function executarQuestao7() {
    const pontuacoes = [];
    for (let i = 0; i < 10; i++) {
        pontuacoes.push(parseInt(prompt(`Digite a ${i + 1}ª pontuação:`)));
    }

    const soma = pontuacoes.reduce((acc, ponto) => acc + ponto, 0);
    const maior = Math.max(...pontuacoes);
    const menor = Math.min(...pontuacoes);
    const media = soma / pontuacoes.length;

    let relatorio = `Média: ${media.toFixed(1)}\nMaior: ${maior}\nMenor: ${menor}\n`;
    if (soma >= 1000) {
        relatorio += "\nParabéns, você desbloqueou um bônus!";
    }
    alert(relatorio);
}

// --- Questão 8: Controle de Reserva de Hotel ---
function executarQuestao8() {
    const hospedes = [];
    do {
        if (hospedes.length >= 10) {
            alert("Hotel lotado!");
            break;
        }
        const nome = prompt("Nome do hóspede para cadastrar:");
        if (!nome) break;
        hospedes.push(nome);
    } while (prompt("Cadastrar outro hóspede? (s/n)")?.toLowerCase() === 's');

    const nomePesquisa = prompt("Qual nome deseja pesquisar?");
    if (nomePesquisa) {
        const encontrado = hospedes.some(h => h.toLowerCase() === nomePesquisa.toLowerCase());
        alert(encontrado ? `Reserva para ${nomePesquisa} existe.` : `Não há reserva para ${nomePesquisa}.`);
    }
    alert(`Lista de Hóspedes:\n- ${hospedes.join("\n- ")}`);
}

// --- Questão 9: Catálogo de Filmes ---
function executarQuestao9() {
    const catalogo = [
        { nome: "Filme A", classificacao: 12 }, { nome: "Filme B", classificacao: 18 },
        { nome: "Filme C", classificacao: 0 }, { nome: "Filme D", classificacao: 16 },
        { nome: "Filme E", classificacao: 14 }
    ];

    const idade = parseInt(prompt("Qual a sua idade?"));
    if (isNaN(idade)) return alert("Idade inválida.");

    const permitidos = catalogo.filter(filme => idade >= filme.classificacao);
    alert(`Filmes que você pode assistir:\n- ${permitidos.map(f => f.nome).join("\n- ")}`);

    do {
        if (prompt("Adicionar um novo filme? (s/n)")?.toLowerCase() !== 's') break;
        const nome = prompt("Nome do novo filme:");
        const classificacao = parseInt(prompt("Classificação indicativa:"));
        catalogo.push({ nome, classificacao });
    } while (true);

    alert(`Catálogo final:\n- ${catalogo.map(f => `${f.nome} (Class. ${f.classificacao})`).join("\n- ")}`);
}

// --- Questão 10: Compras com Cupom ---
function executarQuestao10() {
    const produtos = ["Monitor", "Teclado", "Mouse", "Webcam", "Headset"];
    const precos = [699.90, 129.90, 89.90, 199.90, 249.90];
    let total = 0;
    const comprados = [];

    let lista = "Produtos:\n" + produtos.map((p, i) => `${i} - ${p} (R$ ${precos[i].toFixed(2)})`).join("\n");
    alert(lista);

    const quantidade = parseInt(prompt("Quantos produtos diferentes você quer comprar?"));
    for (let i = 0; i < quantidade; i++) {
        const codigo = parseInt(prompt(`Código do ${i + 1}º produto:`));
        if (codigo >= 0 && codigo < produtos.length) {
            total += precos[codigo];
            comprados.push(produtos[codigo]);
        } else {
            alert("Código inválido!");
        }
    }

    if (prompt("Cupom de desconto?")?.toUpperCase() === "DESCONTO10") {
        total *= 0.90; // Aplica 10% de desconto
        alert("Cupom de 10% aplicado!");
    }

    alert(`Comprados:\n- ${comprados.join("\n- ")}\n\nValor Final: R$ ${total.toFixed(2)}`);
}