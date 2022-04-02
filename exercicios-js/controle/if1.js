const soBoaNoticia = (media) =>{
    if (media >= 7) {
        return console.log(`Aprovado com ${media}`);
    }else{
        return console.log(`Reprovado com ${media}`);
    }
}

soBoaNoticia(5);

const seForVerdadeEuFalo = (valor) =>{
    if(valor){
        console.log('É verdade...');
    }
}


seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({});

