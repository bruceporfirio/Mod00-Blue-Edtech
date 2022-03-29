// Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. 
// Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os 
// valores únicos digitados, em ordem crescente.
const prompt = require('prompt-sync')();

let listaNumerica = [];

for (listaNumerica = 0; listaNumerica < 4; listaNumerica++) {
    listaNumerica.push = +prompt(`Digite números: `)
  
}



console.log(listaNumerica.sort)