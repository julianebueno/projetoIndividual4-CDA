// ==============================================================
// O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a palavra “SAIR”. 
// Quando isso acontecer, deve ser impressa no terminal a lista das propriedades ordenadas de A-Z uma em cada linha.
// ==============================================================
// Pacotes necessários para a execução do app:
// prompt-sync
// ==============================================================

import * as view from "./src/utils/views.js"
import * as processo from "./src/controllers/processos.js"

// =============================================== INICIO

console.clear()
view.saudacao()

let inputRecebido = ""
let listaItens = []
let inputValido = ""

while (1){

    inputRecebido = processo.receberInput()
    if (inputRecebido === "sair") {
        break
    }
    
    inputValido = processo.validarInput(inputRecebido)
    if (!inputValido) {
        view.msgInputInvalido()
    } else {
        processo.adicionarNaLista(inputRecebido)
    }

}


view.listaFinal(listaItens)






console.log("")
// console.log("")


view.encerramento()