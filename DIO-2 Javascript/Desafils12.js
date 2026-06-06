/* uma sala cotem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado. 

dados de entradas:
5
50
10
98
23
dados de saida:

98

como simula com gets

*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;
function gets() {
    const valor = entradas[i];
}
i++;
return valor;

let maiorNumero = 0;
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}
console.log(maiorNumero);
