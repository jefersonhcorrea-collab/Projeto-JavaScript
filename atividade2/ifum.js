const readline = require("readline-sync");

let numeroA = 2, numeroB = 4, numeroC = 5;

readline.questionInt("Digite o numero A: ");
readline.questionInt("Digite o numero B: ");

let soma = (numeroA + numeroB);


if(soma > numeroC){
    console.log("A soma de A + B é Maior do que C");
}

