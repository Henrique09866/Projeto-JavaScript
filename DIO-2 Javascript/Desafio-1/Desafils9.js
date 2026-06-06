/*

crie uma clase pra representar pesssoas.
para cadea pessoa, teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
instancie uma pessoa chamada José que pesa 70kg e tem 1,75 de altura e peça ao José para dizer o valor do seu IMC;
cria uma classificação do IMC:
abaixo de 18.5: Abaixo do peso
Entre 18.5 e 24.9: Peso normal
Entre 25 e 29.9: Acima do peso
Acima de 30 e 40: Obesidade
Acima de 40: Obesidade grave
*/

class pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            return "Acima do peso";
        } else if (imc >= 30 && imc <= 40) {
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }
}

var jose = new pessoa('jose silva', 70, 1.75);

console.log(jose.nome + ' seu IMC é:' + jose.calcularIMC().toFixed(2));
console.log('Classificação do IMC: ' + jose.classificarIMC());