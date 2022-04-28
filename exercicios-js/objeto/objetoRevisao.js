// Coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

delete produto['marca do produto'];

console.log(produto);


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Wellington',
        idade: 23,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
            cidade: 'SP'
        }
    },
    condutores: [{
        nome: 'Mateus',
        idade: 18
    },{
        nome: 'Palloma',
        idade: 21
    }],

    calcularValorSeguro: function(){

    }
}
carro.proprietario.endereco.numero = 523;
delete carro.calcularValorSeguro;
console.log(carro.condutores.length)