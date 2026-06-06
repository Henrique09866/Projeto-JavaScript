// Desafio 4 - Funções (escreve o propio nome) (verificar sua idade)
function MyName(Henrique) {
    console.log('My name is:' + Henrique);
}

MyName('Henrique');

// Desafio 4 - Funções (verificar sua idade)

function verificaridade(idade) {
    if (idade >= 18) {
        console.log('você é maior de idade');
    } else {
        console.log('você é menor de idade');
    }
}

verificaridade(20);