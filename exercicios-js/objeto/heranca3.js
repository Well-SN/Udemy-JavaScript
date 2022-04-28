const pai = { nome: 'Anderson', corCabelo: 'Preto' }
const filho = Object.create(pai);

filho.nome = 'Wellington';
console.log(filho.corCabelo);

const filho2 = Object.create(pai, {
    nome: {value: 'Mateus', writable: false, enumerable: true}

});
console.log(filho2.nome,'cor do cabelo: ', filho2.corCabelo );

console.log(Object.keys(filho));
console.log(Object.keys(filho2));

for(let key in filho){
    filho.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}