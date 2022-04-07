// Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre
// 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deverá escrever na tela se o usuário venceu ou perdeu.
const prompt = require(`prompt-sync`)();
console.log(`Joga da adivinhação!`);
let numUsuario = +prompt(
    `Descubra o número que o computador "pensou". Digite um número de 0 a 10: `,
);
let numComp = Math.floor(Math.random() * 10); //Math.random: gera número decimal aleatório de 0 a 1.  Multiplicação: *10 para chegar de 0 a 10 Math.floor: retirar flutuante(números decimais)

// console.log(numComp, typeof numComp) Verificação de tipo e valor.

console.log(
    `\nNúmero digitado pelo usuário: ${numUsuario}. \nNúmero "pensado" pelo computador: ${numComp}.`,
);

if (numComp === numUsuario) {
    console.log(`Você venceu!`);
} else {
    console.log(`Você perdeu!`);
}