import leia from "readline-sync";

leia.question("Digite seu nome: ");
let a = leia.questionFloat("Salario Bruto: ");
let b = leia.questionFloat("Adicional Noturno: ");
let c = leia.questionFloat("Horas Extras: ");
let d = leia.questionFloat("Descontos: ");

let liquido = (a + b + (c * 5) - d);

console.log(`Salário Líquido: ${liquido.toFixed(2)}`);