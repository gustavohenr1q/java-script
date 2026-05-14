/**
 * Calculadora JS - Exemplo de uso de funções
 * @author Gustavo Henrique 
 */


// Import
const prompt = require('prompt-sync')()


// Variáveis globais
let num1, num2, opcao, resultado

// Fucções das operaçõs (Com Parâmetros) recomendado antes da função principal (main)
function somar(num1, num2) {
    return num1 + num2
}


function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    // Validação
    if (num2 === 0) {
        console.log("Erro! Impossível dividir por 0.")
    } else {
        return num1 / num2
    }
}

function raizQuadrada(num1) {
    return Math.sqrt(num1)
}

function porcentagem(num1, num2) {
    return (num1 * num2) / 100
    
}

// ===============================================================================================

// Função principal (main)

function iniciarCalculadora() {

    do {
                // MENU selecionável
        mostrarMenu()
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return // encerra o loop infinito

                // SOMAR
            case 1:
                console.clear()
                console.log("=== Somar ===")
                console.log("")
                num1 = Number(prompt("Digite o Primeiro Número: "))
                num2 = Number(prompt("Digite o Segundo Número: "))
                resultado = somar(num1, num2)

                break

                // SUBTRAIR
            case 2:
                console.clear()
                console.log("=== Subtrair ===")
                console.log("")
                num1 = Number(prompt("Digite o Primeiro Número: "))
                num2 = Number(prompt("Digite o Segundo Número: "))
                resultado = subtrair(num1, num2)

                break

                // MULTIPLICAR
            case 3:
                console.clear()
                console.log("=== Multiplicar ===")
                console.log("")
                num1 = Number(prompt("Digite o Primeiro Número: "))
                num2 = Number(prompt("Digite o Segundo Número: "))
                resultado = multiplicar(num1, num2)

                break

                // DIVIDIR
            case 4:
                console.clear()
                console.log("=== Dividir ===")
                console.log("")
                num1 = Number(prompt("Digite o Primeiro Número: "))
                num2 = Number(prompt("Digite o Segundo Número: "))
                resultado = dividir(num1, num2)

                break

                 case 5:
                console.clear()
                console.log("=== Raiz Qaudrada ===")
                console.log("")
                num1 = Number(prompt("Digite o número desejado: "))
                resultado = raizQuadrada(num1)

                break

                case 6:
                    console.log("")
                num1 = Number(prompt("Digite a porcentagem: "))
                num2 = Number(prompt("Digite o valor: "))
                resultado = porcentagem(num1, num2)
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
    console.log(`=== Calculadora JS ===`)
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Raiz Quadrada")
    console.log("6. Porcentagem")
    console.log("0. Sair")
}




// Executar função principal (main)

iniciarCalculadora()