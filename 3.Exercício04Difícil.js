// Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do 
// saque e depois informar quantas notas de cada valor serão fornecidas. 
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
// O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, 
// uma nota de 5 e quatro notas de 1.

const prompt = require(`prompt-sync`)();
let valorSaque = +prompt(`Digite o valor do saque [entre 10 e 600]: `);

const nota100 = Math.floor(valorSaque / 100);
valorSaque = valorSaque % 100;

const nota50 = Math.floor(valorSaque / 50);
valorSaque = valorSaque % 50;

const nota10 = Math.floor(valorSaque / 10);
valorSaque = valorSaque % 10;

const nota5 = Math.floor(valorSaque / 5);
valorSaque = valorSaque % 5;

const nota1 = valorSaque;

console.log(`${nota100} notas de R$100`);
console.log(`${nota50} notas de R$50`);
console.log(`${nota10} notas de R$10`);
console.log(`${nota5} notas de R$5`);
console.log(`${nota1} notas de R$1`);
