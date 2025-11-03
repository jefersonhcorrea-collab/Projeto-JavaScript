import readline from "readline-sync";

let numero;
let somapositivos = 0;

do{
    numero = readline.questionInt("Digite um numero: ");

    if(numero>0){
        somapositivos += numero;
    }
} while (numero !==0);

console.log(`\nA soma dos números positivos é: ${somapositivos}`);

