// Faça um script que peça um valor e mostre 
// na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.

const prompt = require('prompt-sync')();
let numero = +prompt(`Digite um número para descobrir se é positivo ou negativo: `)

if (numero >= 1) {
    console.log(`${numero} é positivo!`);
} else if (numero <= -1) {
    console.log(`${numero} é negativo`);
} else {
    console.log(`0 não é uma entrada válida!`);
}

