/* Faça um programa pra calcula um valo de um programa

você tera 3 vareaveis. sendo elas:
  1 preço do combustivel;
  2 gasto medio de combustive no carro por KM;
  3 distancia em km na viagem
*/

const pcombustivel = 6.22;
const kmporlitro = 10;
const distanciakm = 100;

const litrosgastos = distanciakm / kmporlitro;
const valortotal = litrosgastos * pcombustivel;
console.log(valortotal .toFixed(2));

