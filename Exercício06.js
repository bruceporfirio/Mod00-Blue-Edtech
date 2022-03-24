// Qual o valor do troco?
// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

let valorCompra = 100.89 //variável 1
let valorPago = 150 //variável 2
let troco =  valorPago - valorCompra //variável 3 - calculo de troco

console.log(`Seu troco é R$${troco.toFixed(2)}`) //mostrar valor de troco arredondado(toFixed)