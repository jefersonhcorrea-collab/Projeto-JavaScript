import leia from "readline-sync";

let a = leia.questionFloat("Numero 1: ");
let b = leia.questionFloat("Numero 2: ");
let c = leia.questionFloat("Numero 3: ");
let d = leia.questionFloat("Numero 4: ");

let calculo = (a * b) - (c * d);

console.log(`Resultado: ${calculo.toFixed(2)}`);