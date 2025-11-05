import * as readlinesync from "readline-Sync";

let digiteNum
const numeros: Array<Number> = new Array<Number>(2,5,1,3,4,9,7,8,10,6);

for(let numero of numeros){
    console.log(numero);
}

digiteNum = readlinesync.questionInt("\nDigite o numero que voce deseja encontrar: ",
{limitMessage: "Digite um numero inteiro!"});

let indice = numeros.indexOf(digiteNum);

if(indice != -1){
    console.log(`\nO índice do número ${digiteNum} é: ${indice}`);
} else {
    console.log(`\nO número ${digiteNum} não foi encontrado!`);
}