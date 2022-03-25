// Crie um programa em Portugol que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
// Se a nota for menor que 6.0, deve exibir a nota F.
// Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.

const prompt = require('prompt-sync')();
console.log(`Vamos descobrir se você passou!`)
let nota = +prompt(`Digite sua nota: `);

if (nota < 6) {
    console.log(`Sua nota foi F`);
} else if (nota == 6 || nota <= 7 ) {
    console.log(`Sua nota foi D`);
} else if (nota == 7 || nota <= 8) {
    console.log(`Sua nota foi C`);
} else if (nota == 8.0 || nota <= 9) {
    console.log(`Sua nota foi B`);
} else if (nota > 9 || nota <= 10); {
    console.log(`Sua nota foi A`)
} 




