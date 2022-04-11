// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A

const conceito = (vet) => {
    let obj = [];

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= 0 && vet[i] <= 4.9) {
            obj.push({
                nota: vet[i],
                conceito: 'D'
            })
        } else if (vet[i] >= 5 && vet[i] <= 6.9) {
            obj.push({
                nota: vet[i],
                conceito: 'C'
            })
        } else if (vet[i] >= 7 && vet[i] <= 8.9) {
            obj.push({
                nota: vet[i],
                conceito: 'B'
            })
        }else{
            obj.push({
                nota: vet[i],
                conceito: 'A'
            })
        }
    }

    return console.log(obj);
}
conceito([1, 2, 6.9, 8.9, 9 ]);