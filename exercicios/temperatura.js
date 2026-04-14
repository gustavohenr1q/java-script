/**
 * Atividade Converter graus Fahrenheint para graus Celsius
 * @author Gustavo Henrique 
 */

const prompt = require('prompt-sync')()

// Fórmula de conversão:
// C = (F -32) x 5/9

// Variáveis
// c,f

// Entrada:
// f

// Processamento:
// c = (f - 32) * 5/9

// Saída
// c


// Variáveis
let c,f

// Boa prática para começo de projeto clear, título
console.clear()
console.log('Conversão de temperatura em Fahrenheit -> Celsius')

// Entrada de dados
console.log('Digite a temperatura em Fahrenheit: ')
f = Number(prompt(''))

// processamento
c = (f - 32) * 5/9

// Saída 
console.log('O Resultado é: ')
console.log(`${f.toFixed(1)}°F equivale a ${c.toFixed(1)}°C`)


// valor tem que ser feito o teste de mesa, precisa comprovar o resultado com outro lugar dando o mesmo resultado




