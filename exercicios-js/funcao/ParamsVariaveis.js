function soma(){
    let soma= 0;
    for (i in arguments){
        soma += arguments[i];
    }
    return console.log(soma);
}

soma();
soma(1);
soma(10,5,5);
soma(10,5,Math.floor(5.4), " Teste");
soma(" Teste");
