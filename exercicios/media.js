/**
 * Cálculo da média de 2 notas
 * Exemplo de uso da biblioteca prompt-sync
 * @author Gustavo Henrique
 */

// a linha abaixo importa o pacote prompt-sync
// Observação: o pacote precisa estar instalado
// Código de uso:const prompt = require ('prompt-sync')()

// Na entrada de dados
// Observação: o JavaScript entende que recebeu uma string
// para solucionar isso, precisamos converter a entrada de dados númericos
// para number.
// Exemplo: Numer()

// Não aceita caracteres especiais de entrada

// importar o pacote
const prompt = require('prompt-sync')()

// Variáveis
let disciplina,nota1,nota2,media

console.clear()
console.log('Cálculo da média de 2 notas')

// Entrada de dados
disciplina = prompt ('Digite o seu nome da disciplina: ')
console.log(disciplina)
console.log(typeof(disciplina))

// Number converte para o tipo numérico exemplo abaixo
nota1 = Number(prompt('Digite a nota1: '))
console.log(nota1)
console.log(typeof(nota1))

// Number converte para o tipo numérico exemplo abaixo
nota2 = Number(prompt('Digite a nota2: '))
console.log(nota2)
console.log(typeof(nota2))

// Processamento
media = (nota1 + nota2) / 2

// Saída
console.log(`Média: ${media.toFixed(1)}`)

//  Entrada de dados
// disciplina = prompt ('Digite o seu nome da disciplina: ')
// console.log(disciplina)

// Number converte para o tipo numérico exemplo abaixo
// nota1 = Number(prompt('Digite a nota1: '))
// console.log(nota1)

// Number converte para o tipo numérico exemplo abaixo
// nota2 = Number(prompt('Digite a nota2: '))
// console.log(nota2)

// Processamento
// media = (nota1 + nota2) / 2

// Saída
// console.log(`Média: ${media.toFixed(1)}`)
