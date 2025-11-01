import leia from "readline-sync";

leia.question("Digite seu nome: ");
let nota1 = leia.questionFloat("Digite nota 1: ");
let nota2 = leia.questionFloat("Digite nota 2: ");
let nota3 = leia.questionFloat("Digite nota 3: ");
let nota4 = leia.questionFloat("Digite nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`Média final: ${media.toFixed(1)}`);