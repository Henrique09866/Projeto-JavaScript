/* cria uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado
crie um método que dado a quantidade de km e o preço de combustivel nos dê o valor
gasto em reais para realizar este percurso mais e com objetos */

//-------------------------------------------------------------------------

/* const carro1 = {
    marca: 'fiat',
    cor: 'vermelho',
    gastoMedioPorKm: 1 / 12, // 1 litro a cada 12 km
};

const carro2 = {
    marca: 'gol',
    cor: 'branco',
    gastoMedioPorKm: 1 / 10, // 1 litro a cada 10 km
};

function cllgastodopercuso(distanciakm, procombstivel, carro) {
    const litrosgrastos = distanciakm * carro.gastoMedioPorKm;
    const valorgasto = litrosgrastos * procombstivel;
    console.log('O valor gasto com o percurso é: R$' + valorgasto.toFixed(2));
}


cllgastodopercuso(100,5.79,carro1);
cllgastodopercuso(200,5.79,carro2); */

//-------------------------------------------------------------------------

class carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastomedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastomedio;
    }
}

function cllgastodopercuso(distanciakm, procombstivel, carro) {
    const litrosgrastos = distanciakm * carro.gastoMedioPorKm;
    const valorgasto = litrosgrastos * procombstivel;
    console.log('O valor gasto com o percurso é: R$' + valorgasto.toFixed(2));
}

const carro1 = new carro('fiat', 'vermelho', 1 / 12);
const carro2 = new carro('gol', 'branco', 1 / 10);

cllgastodopercuso(100, 5.79, carro1);
cllgastodopercuso(200, 5.79, carro2);
