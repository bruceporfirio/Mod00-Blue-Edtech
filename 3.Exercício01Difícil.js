// Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e
//  mostre a área do terreno:

const prompt = require('prompt-sync')(); 

console.log(`Vamos calcular a área do seu terreno!`);

let largura = +prompt(`Digite a largura do seu terreno: `);
let comprimento = +prompt(`Digite o comprimento do seu terreno: `)

let area =  (largura * comprimento).toFixed(2);

console.log(`Seu terreno tem ${area} metros de área!`);
