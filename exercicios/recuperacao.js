/**
 * SISTEMA DE CALCULADORAS ESTILIZADO
 * Autor: Gustavo Henrique
 */

const prompt = require('prompt-sync')()
require('colors')

// ================= FUNÇÕES =================

function calcularBlocos(area, tipo) {
    if (tipo === 1) return area * 25
    if (tipo === 2) return area * 16
    if (tipo === 3) return area * 20
}

function calcularIMC(peso, altura) {
    if (altura === 0) {
        console.log("Erro! Altura não pode ser 0.".red)
        return 0
    }
    return peso / (altura * altura)
}

function calcularAgua(peso) {
    return peso * 0.035
}

function calcularFCM(idade) {
    return 220 - idade
}

function calcularDesconto(valorTotal, desconto) {
    return valorTotal - ((desconto * valorTotal) / 100)
}

function calcularPrecoVenda(precoCusto, lucro) {
    return precoCusto + ((lucro * precoCusto) / 100)
}

// ================= ESTILO =================

function titulo(texto) {
    console.log("\n" + "==================================".cyan)
    console.log(texto.bold.yellow)
    console.log("==================================\n".cyan)
}

// ================= MENU =================

function iniciarSistema() {
    let opcao

    do {
        console.clear()
        titulo("SISTEMA DE CALCULADORAS")

        console.log("1.".green, "Blocos de construção")
        console.log("2.".green, "IMC")
        console.log("3.".green, "Água por dia")
        console.log("4.".green, "Frequência cardíaca máxima (FCM)")
        console.log("5.".green, "Desconto")
        console.log("6.".green, "Preço de venda")
        console.log("0.".red, "Sair\n")

        opcao = Number(prompt("Escolha uma opção: ".white))

        let a, b, resultado

        switch (opcao) {

            case 0:
                console.log("\nSistema encerrado.".yellow)
                return

            case 1:
                titulo("BLOCOS DE CONSTRUÇÃO")
                console.log("1. Comum | 2. Baiano 8 furos | 3. Baiano 6 furos".gray)
                a = Number(prompt("Tipo: "))
                b = Number(prompt("Área (m²): "))
                resultado = calcularBlocos(b, a)
                console.log(`\nResultado: ${resultado} blocos`.green.bold)
                break

            case 2:
                titulo("IMC")
                a = Number(prompt("Peso (kg): "))
                b = Number(prompt("Altura (m): "))
                resultado = calcularIMC(a, b)
                console.log(`\nIMC: ${resultado.toFixed(2)}`.green.bold)
                break

            case 3:
                titulo("ÁGUA POR DIA")
                a = Number(prompt("Peso (kg): "))
                resultado = calcularAgua(a)
                console.log(`\nÁgua/dia: ${resultado.toFixed(2)} L`.green.bold)
                break

            case 4:
                titulo("FREQUÊNCIA CARDÍACA MÁXIMA")
                a = Number(prompt("Idade: "))
                resultado = calcularFCM(a)
                console.log(`\nFCM: ${resultado} bpm`.green.bold)
                break

            case 5:
                titulo("DESCONTO")
                a = Number(prompt("Valor total: "))
                b = Number(prompt("Desconto (%): "))
                resultado = calcularDesconto(a, b)
                console.log(`\nTotal com desconto: R$ ${resultado.toFixed(2)}`.green.bold)
                break

            case 6:
                titulo("PREÇO DE VENDA")
                a = Number(prompt("Preço de custo: "))
                b = Number(prompt("Lucro (%): "))
                resultado = calcularPrecoVenda(a, b)
                console.log(`\nPreço de venda: R$ ${resultado.toFixed(2)}`.green.bold)
                break

            default:
                console.log("\nOpção inválida.".red)
        }

        prompt("\nPressione ENTER para continuar...".gray)

    } while (true)
}

// ================= INICIAR =================

iniciarSistema()