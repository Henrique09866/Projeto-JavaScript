const etanol = 4.55;

const gasolina = 5.35;

// o tipo de combustivel que esta no seu carro
const tipoDeCombustivel = "etanol";
// gasto de combustivel do carro por km
const kmPorLitro = 10;
// distancia em km do percurso
const distanciaEmKm = 100;

if (tipoDeCombustivel === "etanol") {
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const valorGasto = litrosConsumidos * etanol;
    console.log("O valor gasto em reais é: " + valorGasto.toFixed(2));
} else if (tipoDeCombustivel === "gasolina") {
    const litrosConsumidos = distanciaEmKm / kmPorLitro;
    const valorGasto = litrosConsumidos * gasolina;
    console.log("O valor gasto em reais é: " + valorGasto.toFixed(2));
} else {
    console.log("Tipo de combustível inválido.");
}