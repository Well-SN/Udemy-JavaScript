
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (const key in notas) {
    console.log(key, notas[key])
}

const pessoa  = {
    Nome: 'Palloma',
    Sobrenome: 'Nascimento',
    Endereco: {
        Rua: 'Indiaporâ',
        Numero: 51
    }
}

for (const atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);

}