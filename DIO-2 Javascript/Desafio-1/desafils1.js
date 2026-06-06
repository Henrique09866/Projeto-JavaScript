// media menor que 5 reprovado
const media = 8;
const menorQue5 = media < 5;
const entre5e7 = media >= 5 && media < 7;
const maiorOuIgual7 = media >= 7;

if (menorQue5) {
    console.log("Reprovado");
} else if (entre5e7) {
    console.log("Recuperação");
} else if (maiorOuIgual7) {
    console.log("Aprovado");
}
if (media === 7) {
    console.log("Parabéns por tirar 7!");
}
if (media === 10) {
    console.log("Parabéns por tirar 10!");
}
