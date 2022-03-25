// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

const prompt = require('prompt-sync')();
let numero = parseInt(prompt(`Digite o número para descobrir se é par ou ímpar: `));

if (numero % 2 == 0){
    console.log(`O número ${numero} é par!`)
} else {
    console.log(`O numero ${numero} é impar!`);
}