const { print } = require('./Desafils12'); // Importando as funções auxiliares

let i = 0;
const entradas = [3, 5, 7, 2, 8]; // Exemplo de entradas, substitua pelo que for necessário

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados.reduce((maior, atual) => (atual > maior ? atual : maior), 0));
