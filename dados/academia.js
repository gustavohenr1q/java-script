/**
 * Sistema para gestão de academia com JS - Atividade IMPORTANTE!
 * Estudo de array como estrutura de dados
 * @author Gustavo Henrique
 */

const { white } = require('colors')

// Import
const prompt = require('prompt-sync')()

// Variáveis
let nome, idade, peso, altura, vip

let matricula = 1 // contador de matricula

let opcaoMenu, opcaoConsulta, opcaoRelatorio, busca


// Array Principal

let alunos = []

/*

    Estrutura de dados:
    [0] matricula
    [1] nome
    [2] idade
    [3] peso
    [4] altura
    [5] vip
*/


// Main >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function mainAcademia() {

    // Menu Principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAluno()
                break;

            case 2:
                consultarAlunos()
                break;

            case 3:
                editarAluno()
                break;

            case 4:
                excluirAluno()
                break;

            case 5:
                gerarFichaAluno()
                break;

            case 6:
                gerarRelatorios()
                break;

            case 0:
                console.log("Encerrando o sistema....")
                break

            default:
                console.log("Opção Inválida!")
                prompt("ENTER...")

        }


    } while (opcaoMenu !== 0)

}
// Main end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - CREATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function cadastrarAluno() {

    console.clear()
    console.log("=== CADASTRO DE ALUNO ===")
    console.log("")



    // Lógica Principal
    // captura dos dados
    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno VIP? (s/n): ")
    if (vip === "s") {
        vip = true

    } else {
        vip = false
    }



    // Adicionar os dados na variáveis
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])

    matricula++ // Auto incremento da matrícula

    console.log("")
    console.log("Aluno cadastrado com sucesso!")

    prompt("ENTER....")
}
// CRUD - CREATE end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// CRUD - READ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function consultarAlunos() {

    do {
        console.clear()
        console.log("=== CONSULTA DE ALUNOS ===")
        console.log("")

        console.log("1. Buscar Aluno")
        console.log("2. Listar Alunos")
        console.log("0. Voltar")
        console.log("")

        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;

            case 2:
                listarAlunos()
                break;

            case 0:
                break

            default:
                console.log("")
                console.log("Opção Inválida!")
                prompt("ENTER...")
        }


    } while (opcaoConsulta !== 0)



    // buscarAluno()
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")

        //lógica principal (busca pelo nome)
        //.tolowerCase -> converter tudo em letras minúsculas
        busca = prompt("Digite o nome do aluno: ").toLowerCase()

        //pesquisa(filtro) na estrutura de dados
        let encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })


        //validação
        if (encontrados.length === 0) {
            console.log("")
            console.log("Aluno não encontrado.")
        } else {

             //console.table(alunosOrdenados)
            //criando um cabeçalho para tabela
            let alunoEncontrado = encontrados
                .map((a) => {
                    return{
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
                console.table(alunoEncontrado)
        }

        console.log("")
        prompt("ENTER...")
    }

    // listarAlunos()
    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        // validação (se nenhum aluno cadastrado)
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado.")
        } else {

            //console.table(alunos)
            // ordernar os nomes (criar cópia do array)

            let alunosOrdenados = [...alunos] // Criar cópia, preservar original
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })

            //console.table(alunosOrdenados)
            //criando um cabeçalho para tabela

            let listaAlunos = alunosOrdenados
                .map((a) => {
                    return{
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        VIP: a[5]
                    }
                })
                console.table(listaAlunos)

        }

        prompt("ENTER...")
    }


}
// CRUD - READ end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// CRUD - UPDATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function editarAluno() {

    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")


    prompt("ENTER....")

}
// CRUD - UPDATE end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// CRUD - DELETE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function excluirAluno() {

    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")


    prompt("ENTER....")
}
// CRUD - DELETE end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// FICHA DO ALUNO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    let buscarMatricula = Number(prompt("Digite a matricula do aluno: "))

    //lógica principal (buscar index da estrutura de dados)
    let indice = alunos.findIndex((a) => {
        return a[0] === buscarMatricula
    })

    //validação da busca(pelo index do array)
    if (indice === -1) {
        console.log("Aluno não encontrado")
    } else {
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]

        // status VIP
        let statusVip
        if (vip === true) {
            statusVip = "Sim (Direito a personal trainer)"
        } else {
            statusVip = "Não"
        }

        //cálculos
        let fcm = (208 - (0.7 * idade)).toFixed(0)
        let agua = (peso * 35) / 1000
        let imc = (peso / (altura * altura))
        let pesoIdealMin = (18.5 * (altura * altura)).toFixed(1)
        let pesoIdealMax = (24.9 * (altura * altura)).toFixed(1)
        let statusImc
        if (imc < 18.5) {
            statusImc = "Abaixo do Peso"
        } else if (imc < 25){
            statusImc = "Peso Normal"
        } else if (imc < 30){
            statusImc = "Sobrepeso"
        } else if (imc < 35){
            statusImc = "Obesdidade Grau I"
        } else if (imc < 40){
            statusImc = "Obesidade Grau II"
        } else {
            statusImc = "Obesidade Grau III"
        }

        //exibição

        console.log("-------------------------------------------------------------------------------")

        console.log("                             Ficha do Aluno                                    ")

        console.log("-------------------------------------------------------------------------------")

        console.log(`Matricula: ${buscarMatricula}`)
        console.log(`Nome: ${nome}`)
        console.log(`Idade: ${idade}`)
        console.log(`Peso: ${peso}`)
        console.log(`Altura: ${altura}`)
        console.log(`VIP: ${vip}`)
        console.log("")
        console.log(`FCM: ${fcm} bpm`)
        console.log(`Água Recomendada: ${agua.toFixed(1)} litros/dia`)
        console.log(`IMC: ${imc.toFixed(2)} ${statusImc}`)
        console.log(`Faixa de peso ideal: ${pesoIdealMin} Kg até ${pesoIdealMax} Kg`)

        console.log("-------------------------------------------------------------------------------")
    }



    console.log("")
    prompt("ENTER....")
}
// FICHA DO ALUNO end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)

// Iniciar o sistema
mainAcademia()
