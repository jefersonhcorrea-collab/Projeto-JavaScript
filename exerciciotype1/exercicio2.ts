import readlinesync = require("readline-sync");

let digiteNum: number;
const numeros: Set<number> = new Set<number>();

console.log("Digite 10 números inteiros");

for (let i = 1; i <= 10; i++){
    digiteNum = readlinesync.questionInt(`\nDigite o numero:`,
        {limitMessage: "Digite um numero inteiro!"});
    numeros.add(digiteNum);
}


const numerosOrden: number[] = Array.from(numeros).sort((a, b) => a - b);

console.log("\nListar dados do set (sem repetição e em ordem crescente):");
for( let numero of numerosOrden){
    console.log(numero)
}