const readline = require("readline-sync");

let x = readline.questionInt("Digite um numero : ");


if (x===0){
    console.log("O número é zero");
}else{
    const tipo = (x % 2 === 0)? "é par": "é ímpar";
    const sinal = (x>0)? "positivo":"negativo";
    console.log(`O numero ${tipo} e ${sinal}.`);
}