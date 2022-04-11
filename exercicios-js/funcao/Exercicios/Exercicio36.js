// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.


const fuc1 = (vet, num) =>{
    let array = [];
    for (let i = 0; i < vet.length; i++) {
        array.push(vet[i] * num);
    }

    console.log(array);
}

const fuc2 = (vet, num) =>{
    let array = [];
    for (let i = 0; i < vet.length; i++) {
        if(vet[i] > 5){
            array.push(vet[i] * num);
        }
    }

    console.log(array);
}

fuc1([1,2,3,4],2);
fuc2([1,2,3,4,5,6,7],2);