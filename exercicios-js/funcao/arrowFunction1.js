let dobro = function (a){
    return console.log(2*a);
}

dobro = (a) =>{
    return console.log(2*a);
}

dobro = a => console.log(2*a); // Retorno está implícito

dobro(Math.PI);

let ola = function(){
    return 'Olá';
}

ola = () => 'Olá';
//ola = _ => 'Olá' posso passar sem retorno;

console.log(ola());