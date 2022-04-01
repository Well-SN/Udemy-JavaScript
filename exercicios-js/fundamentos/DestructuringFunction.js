function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {min: 10, max: 20}

console.log(rand({}));
console.log(rand({min: 955}));
console.log(rand(obj));