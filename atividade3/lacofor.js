import readline from "readline-sync";


let entrada = readline.questionInt("Digite o primeiro numero do intervalo: ");
let saida = readline.questionInt("Digite o segundo numero do intervalo: ");


if (entrada >= saida) {
    console.log("Intervalo é inválido!")
} else {
    console.log(`\nNo intervalo entre ${entrada} e ${saida}: \n`);

    for (let i = entrada; i <= saida; i++) {
        if(i % 3===0 && i % 5===0){
            console.log(`${i} é multiplo de 3 e 5`);
        }

    }
}

