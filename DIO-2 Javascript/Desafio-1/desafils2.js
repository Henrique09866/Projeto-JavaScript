/* IMC formula: peso / (altura * altura) 

IMC em adutos condição:
Abaixo de 18.5: Abaixo do peso
Entre 18.5 e 24.9: Peso normal
Entre 25 e 29.9: Acima do peso
Acima de 30 e 40: Obesidade
Acima de 40: Obesidade grave

*/

const peso = 62; // em kg
const altura = 1.56; // em metros

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc <= 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}

console.log("Seu IMC é: " + imc.toFixed(2));