/* elabore um alogoritimo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
condições de pagamento: Soque em funções
- a vista debito, recebe 10% de desconto
- a vista no dinheiro ou pix, recebe 15% de desconto
- em duas vezes, preço normal de etiqueta sem juros
- acima de duas vezes, preço normal de etiqueta mais juros de 10% 
*/

function cllfinal(precoetiqueta, condicaopag) {
    const precoEtiqueta = precoetiqueta; // preço normal do produto
    let valorfinal;
    if (condicaopag === 'acima de duas vezes') {
        valorfinal = precoEtiqueta * 1.1; //10% de juros
        console.log('o valor a ser pagor é: R$' + valorfinal.toFixed(2));
    } else if (condicaopag === 'em duas vezes') {
        valorfinal = precoEtiqueta; // preço normal
        console.log('o valor a ser pagor é: R$' + valorfinal.toFixed(2));
    } else if (condicaopag === 'a vista no dinheiro ou pix') {
        valorfinal = precoEtiqueta * 0.85; // 15% de desconto
        console.log('o valor a ser pagor é: R$' + valorfinal.toFixed(2));
    } else if (condicaopag === 'a vista debito') {
        valorfinal = precoEtiqueta * 0.9; // 10% de desconto
        console.log('o valor a ser pagor é: R$' + valorfinal.toFixed(2));
    } else {
        console.log('condição de pagamento inválida.');
    }
}

cllfinal(200, 'acima de duas vezes');
cllfinal(150, 'em duas vezes');
cllfinal(100, 'a vista no dinheiro ou pix');
cllfinal(80, 'a vista debito');
cllfinal(50, 'outra condição');
