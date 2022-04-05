const fabricantes = ['Mercedes','Audi','BMW'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante, indice, array){
    console.log(fabricante, indice, array);
});