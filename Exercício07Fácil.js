// Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
const prompt = require('prompt-sync')(); 
 
let anoNascimento = +prompt('Em que ano você nasceu? ');
let anoAtual = +prompt('Em que ano estamos? ');
let suaIdade = anoAtual - anoNascimento

console.log(`Você tem ${suaIdade} anos. Está na flor da idade!`);