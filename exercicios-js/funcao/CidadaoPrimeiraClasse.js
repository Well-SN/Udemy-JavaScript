//Função em JS é First-Class Object (Citizens)
// Higher-order function


//Criar de forma literal
function fun1(){ }


// Armazenar em uma varável
const fun2 = function(){ }

//Armazenar em um array
const array = [function(a,b){return a + b }, fun1, fun2];
console.log(array[0](3,3));

//Armazenar em um objeto
const obj = {}
obj.falar = function(){ return 'Estou falando!!'}
console.log(obj.falar());

// Pssar uma função para outra função
function run(fun){
    fun()
}
run(function(){console.log('Executando...')});


//Uma funçao pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(1,2)(5);
const cincoMais = soma(2,3);
cincoMais(5);

const func3 = () => { }