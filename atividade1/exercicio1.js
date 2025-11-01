import leia from "readline-sync";


leia.question('Digite seu nome: ');
let x = leia.questionFloat('Digite Salario: ');
let y = leia.questionFloat('Digite Abono: ');


let salario = x + y;
console.log(`Novo Salario: ${salario.toFixed(2)}`);