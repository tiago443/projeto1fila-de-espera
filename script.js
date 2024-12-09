let queue = []
let options

do {
    let listaFila = "Fila:\n"
    if (queue.length === 0) {
        listaFila += "Nenhum paciente na fila."
    } else {
        for (let i = 0; i < queue.length; i++) {
            listaFila += `${i + 1}º - ${queue[i]}\n`
        }
    }

    let menu = listaFila + "\n\nEscolha uma opção:\n" +
               "1 - Novo Paciente\n" +
               "2 - Consultar Paciente\n" +
               "4 - Encerrar"

    options = prompt(menu)

    if (options === "1") {
        let nomePaciente = prompt("Digite o nome do paciente:")
        if (nomePaciente) {
            queue.push(nomePaciente)
            alert(nomePaciente + " adicionado à fila.")
        } else {
            alert("Nome não pode ser vazio.")
        }
    } else if (options === "2") {
        if (queue.length > 0) {
            alert("Paciente consultado: " + queue.shift())
        } else {
            alert("Nenhum paciente na fila.")
        }
    }
} while (options !== "4")

alert("Sistema encerrado.")
