/**
 * Atividade2: Cálculo do consumo de combustível
 * Desenvolva um programa que calcule o consumo médio de combustível de um carro. 
 * O usuário deve inserir a distância percorrida e a quantidade de combustível consumido. 
 * O programa deve calcular e exibir o consumo médio (km/l).
 * @author Gustavo Henrique
 */

// Import 
const prompt = require('prompt-sync')()

// Variáveis
let distancia, litros, consumo

// Entrada de dados
console.log('Digite a distância percorrida em Km: ')
distancia = Number(prompt(''))

console.log('Digite a quantidade de combustível que vc utilizou em Litros (Gasolina, Álcool ou Gás...): ')
litros = Number(prompt(''))

// Processamento
consumo = distancia / litros

// Saída
console.log('Seu consumo médio foi de: ')
console.log(`${consumo.toFixed(1)}Km/L`)

// Teste de mesa feito e resultado confirmado