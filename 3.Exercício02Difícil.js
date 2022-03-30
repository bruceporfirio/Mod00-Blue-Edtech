// Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando 
// um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
const prompt = require('prompt-sync')(); 
console.log(`Descubra se você tem idade para votar nessa eleição!`);
anoNascimento = +prompt(`Em que ano você nasceu: `)
let resultado = 2022 - anoNascimento;

if (resultado >= 16) {
    console.log(`Você tem idade para votar nesta eleição!`)
} else if (resultado < 16) {
    console.log(`Você não tem idade suficiente para votar nesta eleição.`)
}