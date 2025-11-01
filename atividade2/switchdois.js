const readline = require("readline-sync");

let codigo = readline.questionInt("Digite o codigo do produto (1 a 6): ");
let quantidade = readline.questionInt("Digite a quantidade da comprada: ");

let produto;
let preco;

switch (codigo){
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigenrante";
        preco = 8.00;
        break;
    
    case 5:
        produto = "Suco de Laranja";
        preco = 13.00;
        break;

    default:
        console.log("Código inválido! Digite um número de 1 a 6");
        break;

}

let total = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);