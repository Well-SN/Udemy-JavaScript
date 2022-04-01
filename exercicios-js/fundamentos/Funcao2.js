// Armazenando uma função em variável
const imprimirSoma =  function (a, b){
    console.log(a + b);
}

imprimirSoma(2,3);


// Armazenando uma funcao arrow em variavel
                //=> substitui a palavra function
const soma = (a, b=0) => {
    return a+b;
}

console.log(soma(2,3));

// retorno implícito
const subtracao = (a,b) => a-b;

console.log(subtracao(3,2));


//funcao com um parametro
const imprimir = a => console.log(a);
imprimir('FOI!');