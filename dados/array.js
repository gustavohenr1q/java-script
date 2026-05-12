/**
 * Estrutura de dados - Array(vetor)
 * @author Gustavo Henrique
 */

console.clear()

// a linha abaixo cria um array(vetor)
//[0]        [1]        [2]       [3]      [4]
let alunos = ["Gustavo", "Isaque", "Gabriella", "Mike", "Samuel"]
console.clear()
console.log("============= ARRAY =============")
console.log("")

console.log(alunos)
console.log(`Um array é do tipo: ${typeof (alunos)}`)

// Obtendo o tamanho do array
console.log(`Tamanho do array: ${alunos.length}`)
console.log("")

// Adicionando dados de um array (CRUD Create)
console.log("CRUD CREATE =============")

// O método push() adiciona de forma segura um dado ao array
alunos.push("Guilherme")
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)
console.log("")

// Leitura dos dados de um array (CRUD Read)
console.log("CRUD READ =============")
console.log(alunos)
console.log("")
console.table(alunos)
console.log("")

// Exibindo um dado específico do array(table)
console.log(`Aluno[2]: ${alunos[2]}`)
console.log("")

// Alterando dados de um array (CRUD Update)
console.log("CRUD UPDATE =============")
console.log("")
alunos[2] = "Gabriela"
console.log(`Aluno[2] Atualizado: ${alunos[2]}`)
console.log("")
console.table(alunos)
console.log("")

// Excluindo dados de um array (CRUD Delete)
console.log("CRUD Delete =============")
console.log("")

// Delete exclui de forma segura um dado do array(table)
delete alunos[1]
console.table(alunos)
console.log("")
console.log(`Tamanho do array: ${alunos.length}`)
console.log("")


// Percorrendo um array
console.log("--------------------------------")
console.log("Percorrendo um array com for")

//[0][1][2][3][4][5]
let notas = [3, 8, 5, 9, 2, 7]
console.log(notas)
console.table(notas)
console.log("")

// Percorrendo um array com for
console.log("Laço for ======================")
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
    console.log("")

}


// Simplificação do laço for (for each)
console.log("Laço forEach =======================")
notas.forEach((notas) => {
    console.log(notas)
    console.log("")
})


// Manipulação e filtragem de dados de um array 

console.log("")
console.log("------------------------------")
console.log("Manipulação e filtragem de dados ==")
console.log("")
console.log("Exemplo 1: Adicionar os pontos as notas dos alunos")
console.log("")

let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(`Notas Originais: ${notas}`)
console.log(`Notas Atualizadas: ${notasAtualizadas}`)
console.log("")

console.log("")
console.log("Exemplo 2: Conversão de um sistema de notas(números) para letras(caracteres)")
console.log("")

/*
    NA - Não Atendeu (notas < 5)

    PA - Parcialmente atendido (nota entre 5 e 7)

     A - Atendeu (nota > 7)
 */


let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})

console.log("")
console.log(`Notas Originais: ${notas}`)
console.log(`Notas Convertidas: ${notasConvertidas}`)
console.log("")

// Nova estrutura de dados

let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }

]

console.log("")
console.log("Estrutura de dados usando Array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)


// Filtros 
console.log("")
console.log("Filtros ================= ")
console.log("")
console.log("Exemplo 1 Alunos Bolsistas")
console.log("")
console.log(alunosDC.filter((b) => {
        return b.bolsista === true
}))

console.log("")
console.log("=============================")
console.log("")
console.log("Exemplo 2 Alunos com idade superior a 40 anos")
console.log("")
console.log(alunosDC.filter((i) => {
        return i.idade >= 40
}))

console.log("")
console.log("=============================")
console.log("")
console.log("Exemplo 3 Ordenar os alunos ")
console.log("")
console.log("CUIDADO!!!!! TABELA CÓPIA ABAIXO, INDEX NÃO ESTÁ CORRETO")

// DICA: Criar uma cópia do array original para não modificar o index([0], [1], [2]....) ideal para "Relatórios"

let alunosOrdenados = [...alunosDC] // Criar cópia, preservar original
alunosOrdenados.sort((a, z) => {
        return (a.nome.localeCompare(z.nome))
})

console.table(alunosOrdenados)