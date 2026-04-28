/**
 * Estudo das estruturas while | do while
 * @author Gustavo Henrique
 */

const prompt = require('prompt-sync')()

let tabuada
let i = 1;

console.clear()
console.log('Tabuada com WHILE')


tabuada = Number(prompt("Digite aqui o número da qual tabuada deseja vizualizar: "))


while (i < 11) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    i++
}
