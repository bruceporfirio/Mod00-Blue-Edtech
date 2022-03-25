// Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores 
// e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
// baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.
const prompt = require('prompt-sync')(); 

let salario = +prompt(`Digite o salário para calcular o aumento R$`)

if (salario <= 280 ) {
    console.log(`Salário atual R$${salario}; \nSalário reajustado em 20%; \nAumento de R$${(0.2 * salario).toFixed(2)} \nSalário final com reajuste R$${((salario * 0.2) + salario).toFixed(2)};`)
} else if (salario > 280 && salario <= 700) {
    console.log(`Salário atual R$${salario}; \nSalário reajustado em 15%; \nAumento de R$${(0.15 * salario).toFixed(2)} \nSalário final com reajuste R$${((salario * 0.15) + salario).toFixed(2)};`)
} else if (salario >= 700 && salario <= 1500) {
    console.log(`Salário atual R$${salario}; \nSalário reajustado em 10%; \nAumento de R$${(0.10 * salario).toFixed(2)} \nSalário final com reajuste R$${((salario * 0.10) + salario).toFixed(2)};`)
} else if (salario > 1500) {
    console.log(`Salário atual R$${salario}; \nSalário reajustado em 5%; \nAumento de R$${(0.05 * salario).toFixed(2)} \nSalário final com reajuste R$${((salario * 0.05) + salario).toFixed(2)};`)
} 
