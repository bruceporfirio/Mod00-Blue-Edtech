// Faça um programa de cadastro de clientes que mostre um menu de opções e permita 
// com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const prompt = require('prompt-sync')(); //Adicionar Prompt

let opcao1 = 'Hambúrguer'
let opcao2 = 'Batata Frita'
let opcao3 = 'Hambúrguer Vegetariano'

console.log('Menu do Restaurante')
console.log('1. Batata Frita')
console.log('2. Hambúrguer')
console.log('3. Hambúrguer Vegetariano')



let escolhaCliente = parseInt(prompt('Digite a letra correspondente ao seu pedido:'));

if(escolhaCliente == 1) {
    console.log(`Você escolheu: ${opcao1}`);
} else if (escolhaCliente == 2) {
    console.log(`Você escolheu: ${opcao2}`)
} else if (escolhaCliente == 3) {
    console.log(`Você escolheu: ${opcao3}`)
} else {
    console.log('Escolha uma ENTRADA válida!')
}


