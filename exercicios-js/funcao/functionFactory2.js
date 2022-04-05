// Factory simples dinamica
function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: preco * 0.20
    }
}


console.log(criarProduto('TV',250));