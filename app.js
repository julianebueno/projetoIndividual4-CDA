// ==============================================================
// O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a palavra “SAIR”. Quando isso acontecer, deve ser impressa no terminal a lista das propriedades ordenadas de A-Z uma em cada linha.
// ==============================================================
// Pacotes necessários para a execução do app:
// prompt-sync
// ==============================================================

import * as view from "./src/utils/views.js"
import * as processo from "./src/controllers/processos.js"

console.clear() // limpa tela
view.saudacao() // mostra saudação

while (1){

    let inputRecebido = processo.receberInput()
    if (inputRecebido === "sair") { // condição para encerrar o app
        break // sai do loop
    }
    
    let inputValido = processo.validarInput(inputRecebido)
    if (!inputValido) {
        view.msgInputInvalido() // mostra mensagem de propriedade recebida inválida
    } else {
        view.msgInputValido(inputRecebido) // mostra mensagem de input válido
        processo.adicionarNaLista(inputRecebido) // adicionado na lista
    }
}

view.msgSair() // mostra mensagem de saída
view.listaFinal(processo.lista) // mostra a lista final