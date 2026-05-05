/**
 * Ativadade de recuperação de nota feita no dia 04/05
 * @author Gustavo Henrique
 */


// Import
const prompt = require('prompt-sync')()

// Variáveis
let peso, altura, agua, idade, resultado

function imc(peso, altura) {
    if (num2 === 0) {
        console.log("Erro! Impossível dividir por 0.")
    } else {
        return num1 / num2
    }
}

function litrosAgua(peso) {
    return 
}




// Função principal (main)

function iniciarCalculadoraSaude() {

    do {
                // MENU selecionável
        mostrarMenu()
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return // encerra o loop infinito

                // IMC
            case 1:
              

                break

                // AGUA
            case 2:


                break

                // FCM
            case 3:
            

                break

                // DIVIDIR
            case 4:
              

                break

                // Caso nenhuma opção for verdadeira
              default:
                console.log("Opção Inválida.")
                prompt("Pressione [Enter] para continuar...")

                continue // Continua dentro do switch case


        }

           // Exibir o resultado
            console.log(`Resultado: ${resultado.toFixed(2)}`)
            prompt("Pressione [Enter] para voltar ao menu...")

    } while (true)
}

// Função Menu
function mostrarMenu() {
    console.clear()
    console.log(`=== Calculadora da Saúde ===`)
    console.log("1. IMC")
    console.log("2. Litros de água/dia")
    console.log("3. Multiplicar")
    console.log("4. FCM")
    console.log("0. Sair")
}