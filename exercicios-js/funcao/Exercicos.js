/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const operacao = (a, b) => {
    const soma = a + b;
    const sub = a - b;
    const mult = a * b;
    const div = a / b;

    return console.log(`soma: ${soma}, subtração:  ${sub}, multiplicação:  ${mult}, divisão:  ${div}`);
}

operacao(10, 2);


/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const classTriangulo = (lado1, lado2, lado3) => {
    let classificacao = '';
    if (lado1 == lado2 && lado2 == lado3) {
        classificacao = 'Equilátero';
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        classificacao = 'Isósceles';
    } else {
        classificacao = 'Escaleno';
    }

    return console.log(`Classificação ${classificacao}`);
}

classTriangulo(2, 2, 2);
classTriangulo(2, 3, 3);
classTriangulo(2, 3, 4);


// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const expo = (base, expo) => console.log(base ** expo);

expo(2, 4);

/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/
const resto = (dividendo, divisor) => {
    const valor = dividendo / divisor;
    const resto = dividendo % divisor;
    console.log(`Valor: ${Math.floor(valor)} , Resto: ${resto}`);
}

resto(7, 3);



/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

const valorQuebrado = (a = 0.1, b = 0.2) => {
    let val = a + b;
    return console.log(`R$: ${val.toFixed(2).toString().replace(".", ",")}`);
}

valorQuebrado();



/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosCompostos(100, 10 / 100, 2));


/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

const Bhaskara = (a, b, c) => {
    let delta = b ** 2 - (4 * a * c);
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    if (delta < 0) {
        return console.log('Delta é negativo');
    } else {
        return console.log([x1, x2]);
    }
}

Bhaskara(1, 3, 2);
Bhaskara(3, 1, 2);

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

 
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0, 57"
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes));

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/
