// Faça um programa de cadastro de clientes que mostre um menu de opções e permita 
// com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const prompt = require('prompt-sync')(); //Adicionar Prompt

let opcao1 = 'Hambúrguer' //variáveis contendo opções 
let opcao2 = 'Batata Frita' //variáveis contendo opções 
let opcao3 = 'Hambúrguer Vegetariano' //variáveis contendo opções 

console.log('Menu do Restaurante') //Apresentação de menu com número correspondente ao pedido
console.log('1. Batata Frita') //Apresentação de menu com número correspondente ao pedido
console.log('2. Hambúrguer') //Apresentação de menu com número correspondente ao pedido
console.log('3. Hambúrguer Vegetariano') //Apresentação de menu com número correspondente ao pedido



let escolhaCliente = prompt('Digite a letra correspondente ao seu pedido:'); //Entrada de número correspondente ao menu

if(escolhaCliente == 1) { //se escolha do cliente for igual a 1
    console.log(`Você escolheu: ${opcao1}`); //resposta correspondente a 1
} else if (escolhaCliente == 2) { //senão se escolha do cliente for igual a 2
    console.log(`Você escolheu: ${opcao2}`) //resposta correspondente a 2
} else if (escolhaCliente == 3) { //senão se escolha do cliente for igual a 3
    console.log(`Você escolheu: ${opcao3}`) //resposta correspondente a 3
} else { //senão escolha do cliente não for uma entrada válida
    console.log('Escolha uma ENTRADA válida!') //resposta correspondente a entrada válida
}


