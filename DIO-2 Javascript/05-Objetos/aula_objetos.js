

const Henrique = {
    nome : 'Henrique Rodrigues',
    idade : 16,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

/* console.log(Henrique.nome);
console.log(Henrique.idade);
console.log(Henrique); */

/* Henrique.altura = 1.70;

console.log(Henrique); */

Henrique.descrever();