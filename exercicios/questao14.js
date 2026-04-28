/**
 * Cálculo da quantidade de água
 * @author Gustavo Henrique
 */

// Import
const prompt = require('prompt-sync')()

// Variáveis
let peso,agua

console.clear()
console.log('Cálculo de quantidade de água para você com base no seu peso')
console.log('')

// Entrada
peso = Number(prompt('Digite seu peso: '))

// Processamento
agua = peso * 0.035
console.log('')


// Saída
console.log(`Você precisa tomar ${agua.toFixed(1)} Litros de água por dia no mínimo`)
