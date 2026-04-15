/**
 * Atividade 13: Cálculo da quantidade de latas de tinta
 * Desenvolva um programa que calcule a quantidade de latas de tinta necessárias para pintar uma parede
 * dado o tamanho da parede (em m²) e o rendimento da lata (em m² por lata).
 */

// Import
const prompt = require('prompt-sync')()

// Variáveis
let qntlatas,parede,rendimento

console.clear()
console.log('Cálculo da quantidade de latas de tinta')
console.log('')

// Entrada
console.log('Digite o rendimento da lata de tinta em m²:')
rendimento = Number(prompt(''))

console.log('')

console.log('Digite o tamanho da parede em m²:')
parede = Number(prompt(''))

// Processamento
qntlatas = parede / rendimento

// Saida
console.log('')

console.log(`O resultade é de: ${Math.ceil(qntlatas)}litros de tinta para a parede`)
