/* elabore um alogoritimo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
condições de pagamento:
- a vista debito, recebe 10% de desconto
- a vista no dinheiro ou pix, recebe 15% de desconto
- em duas vezes, preço normal de etiqueta sem juros
- acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/

const precoEtiqueta = 100; // preço normal do produto
const condicaopag = "acima de duas vezes"; // condição de pagamento escolhida
let valorFinal;

if (condicaopag === "a vista debito") {
    valorFinal = precoEtiqueta * 0.9; // 10% de desconto
    console.log("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
} else if (condicaopag === "a vista no dinheiro ou pix") {
    valorFinal = precoEtiqueta * 0.85; // 15% de desconto
    console.log("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
} else if (condicaopag === "em duas vezes") {
    valorFinal = precoEtiqueta; // preço normal
    console.log("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
} else if (condicaopag === "acima de duas vezes") {
    valorFinal = precoEtiqueta * 1.1; // 10% de juros
    console.log("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
} else {
    console.log("Condição de pagamento inválida.");
}

