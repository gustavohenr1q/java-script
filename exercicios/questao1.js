/**
 * Atividade 1: Crie um programa que calcule o volume de um aquário. 
 * O usuário deve inserir o comprimento, a largura e a altura do aquário. 
 * O programa deve calcular o volume e exibir o resultado em litros.
 * @author Gustavo Henrique
 */

// Import 
const prompt = require('prompt-sync')()

// Variáveis
let comprimento,largura,altura,volume

// Entrada de dados
console.log('Digite o comprimento em centímetros do Aquário: ')
comprimento = Number(prompt(''))

console.log('Digite a largura em centímetros do Aquário: ')
largura = Number(prompt(''))

console.log('Digite a altura em centímetros do Aquário: ')
altura = Number(prompt(''))

// Processamento
volume = (comprimento * largura * altura) / 1000


// Saída
console.log('O Volume do aquário é de: ')
console.log(`${volume}L`)

// Teste de mesa feito e resultado confirmado
