const pessoa = {
    saudacao: 'Boa noite',
    falar(){
        console.log(this.saudacao)    
    }
}

pessoa.falar()

const falar1 = pessoa.falar
falar1() //Conflito entre paradigmas: funcional e OO



const falarDePesssoa = pessoa.falar.bind(pessoa);
falarDePesssoa();