import readline from "readline-sync";

let vet = [2,5,1,3,4,9,7,8,10,6];
let numero = readline.questionInt("Digite o numero que deseja encontrar: ");
let posicao = -1;

for( let i = 0; i<10; i++){
    if(vet[i]===numero){
        posicao = i
        break;
    }
}

if (posicao !== -1){
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
}else{
    console.log("O número não foi encontrado!");
}




