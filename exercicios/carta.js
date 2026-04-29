/**
 * Sorteio de uma carta
 * Exemplo de uso de array para simplificar o código
 * @author Gustavo Henrique
 */

const prompt = require('prompt-sync')()

let novoJogo = "n"

do{

    // Variaveis Cartas
let nipes = ["♠", "♥", "♦", "♣" ]

let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ]

    // Entrada (Sorteio)
console.clear()
console.log("Sorteio de uma carta - ♠ ♥ ♦ ♣")

prompt("Pressione a tecla [Enter] para sortear uma carta")


    // Processamento com variaveis (Sorteio)

let nipe = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3

let face = faces[Math.floor(Math.random() * 13)]// 0 1 2 3 4 5 6 7 8 9 10 11 12


        // Saida (Sorteio)
console.log(`${face}${nipe}`)

novoJogo = prompt("Deseja jogar novamente? (S/N)? ")

} while( novoJogo === "s" || novoJogo === "S");

