// E os 10% do garçom?
// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// Defina uma variável para o valor da taxa de serviço que é de 10%;
// // Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

let refeicao = 42.54 //variável refeição
let taxaDeServico = 0.1 //variável taxa de serviço
let calculoTaxa = refeicao * taxaDeServico //variável de valor final de taxa cobrada
let valorFinal = refeicao + calculoTaxa //cálculo de valor final 


console.log(`O valor da sua conta é de R$42,54, acrescido de 10% é R$${valorFinal.toFixed(2)}`); //apresentar resultado 
//toFixed = define p resultado final com duas casa decimais. 