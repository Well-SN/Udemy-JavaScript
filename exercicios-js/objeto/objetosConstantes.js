const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa);
pessoa.nome = 'Maria';
console.log(pessoa.nome);
pessoa.end = 'Rua ABC';


const pessoaConstatnte  = Object.freeze({nome: 'João'});
console.log(pessoaConstatnte)