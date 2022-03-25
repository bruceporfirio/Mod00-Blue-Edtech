// Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" 
// se os números forem iguais
const prompt = require('prompt-sync')();
console.log(`Descubra se o número é maiores que o outro ou iguais!`);
numero1 = +prompt(`Digite o primeiro número: `);
numero2 = +prompt(`Digite o segundo número: `);

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior!`)
} else if (numero2 > numero1) {
    console.log(`O número ${numero2} é maior!`)
} else {
    console.log(`Os números são iguais!`)
}