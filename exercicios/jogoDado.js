/**
 * Jogo do dado
 * Exemplo de uso da estrutura do while
 * @author Gustavo Henrique
 */

const prompt = require('prompt-sync')()

let novoJogo = "n"


do {
    console.clear()
    console.log('Jogo do dado')

    prompt("Pressione [Enter] para lançar o dado... ")

    console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)

    novoJogo = prompt('Deseja lançar o dado novamente?(s/n)')

} while(novoJogo === "s" || novoJogo === "S")