// Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO
// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. 
// Mostrar o resultado no formato U$9999.99
const prompt = require('prompt-sync')(); 

let dolar = 4.83
let euro = 5.31
let libraEsterlina = 6.37
let dolarCanadense = 3.85
let pesoArgentino = 0.044
let pesoChileno = 0.006

let real = +prompt('Digite o valor em real que deseja converter: ');

console.log('Valores convertidos em real:')
console.log(`Dólar: R${(dolar * real).toFixed(2)} \nEuro: R$${(euro * real).toFixed(2)} \nLibra Esterlina: R$${(libraEsterlina * real).toFixed(2)} \nDolar Canadense: R$${(dolarCanadense * real).toFixed(2)} \nPeso Argentino: R$${(pesoArgentino * real).toFixed(2)} \nPeso Chileno: R$${(pesoChileno* real).toFixed(2)} `);

