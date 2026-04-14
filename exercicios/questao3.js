/**
 * 3) Atividade 3: Cálculo da área de um terreno
 * Desenvolva um programa que calcule a área de um terreno retangular. 
 * O usuário deve fornecer o comprimento e a largura do terreno, e o programa deve calcular a área em metros quadrados.
 * @author Gustavo Henrique
 */

// Import 
const prompt = require('prompt-sync')()

// Variáveis
let comprimento,largura,area

// Entrada
console.log('Digite o comprimento em metros do terreno: ')
comprimento = Number(prompt(''))

console.log('Digite a largura em metros do terreno: ')
largura = Number(prompt(''))


// Processamento
area = comprimento * largura

// Saída
console.log(`A Área do terreno é de: ${area}m²`)

// Teste de mesa feito e resultado confirmado