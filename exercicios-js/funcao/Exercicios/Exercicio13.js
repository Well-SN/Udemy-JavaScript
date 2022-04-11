// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const diaSemana = (key) =>{
    switch (key) {
        case 1:
            console.log('Domingo')
            break;
    
        case 2:
            console.log('Segunda-Feira')
            break;
    
        case 3:
            console.log('Terça-Feira')
            break;
    
        case 4:
            console.log('Quarta-Feira')
            break;
    
        case 5:
            console.log('Quinta-Feira')
            break;
    
        case 6:
            console.log('Sexta-Feira')
            break;
    
        case 7:
            console.log('Sábado')
            break;
    
        default: 
            console.log('Valor inválido!!')
            break;
    }
}

diaSemana(3);