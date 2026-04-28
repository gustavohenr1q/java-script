/**
 * Atividade 4: Cálculo da Conversão de Real para Dólar
 * Desenvolva um programa que calcule o valor em dólares (US$) a partir de uma quantia em reais (R$)
 * utilizando uma taxa de câmbio informada pelo usuário.
 * @author Gustavo Henrique
 */

// Import 
const prompt = require('prompt-sync')()

// Variáveis
let dolar,real,totalConvertido

console.clear()
console.log('Converter Reais para Dólar')
console.log('')

//Entrada
real = Number(prompt("Digite a quantia em Reais(R$): "))

// Processamento
