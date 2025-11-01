


let numero1 = readline.questionInt("Digite o numero 1: ");
let numero2 = readline.questionInt("Digite o numero 2: ");

let soma = (numero1 + numero2);
let sub = (numero1 - numero2);
let multi = (numero1 * numero2);
let fracao = (numero1 / numero2);




let opcao = readline.questionInt(
    "Qual operacao voce quer fazer? \n1 - Soma \n2 - Divisao \n3 - Multiplicacao - \n4 - Subtracao \nEscolha: ");

switch(opcao){
    case 1:
        console.log(`Resultado da soma: ${soma.toFixed(1)}`);
        break;
    
    case 2:
        console.log(`Resultado da subtração: ${sub.toFixed(1)}`);
        break;

    case 3:
       console.log(`Resultado da multiplicação: ${multi.toFixed(1)}`);
        break;

    case 4:
        console.log(`Resultado da divisão: ${fracao.toFixed(1)}`);
        break;

    default:
        console.log("Opção inválida");
        break;
}



        
    
    
    