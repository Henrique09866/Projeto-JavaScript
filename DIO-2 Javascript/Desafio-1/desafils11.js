// crie um programa que seja capaz de pecorrer uma lista de números e imprima cada número par encontrado na lista.

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaNumeros.length; i++) {
    const element = listaNumeros[i];
    if (element % 2 === 0) {
        console.log(element);
    }
}
