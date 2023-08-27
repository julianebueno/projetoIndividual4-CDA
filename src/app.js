
// ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
// !                                                       !
// !    Pacotes necessários para a execução do app:        !
// !                                                       !
// !    prompt-sync                                        !
// !                                                       !
// !                                                       !
// !    Rode npm install <pacote> no terminal              !
// ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !


// =============================================== FUNÇÕES
function saudacao(){
    console.log("")
    console.log(".oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.")
    console.log(".                                                       .")
    console.log(".  Organizador de Propriedades CSS                      .")
    console.log(".                                                       .")
    console.log(".  Para sair, digite SAIR                               .")
    console.log(".                                                       .")
    console.log(".oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.")
    console.log("")
}
function receberInput(){
    const inputRecebido = prompt('   Digite uma propriedade CSS: > ');
    return inputRecebido
}
function validarInput(inputRecebido){
    if (inputRecebido) {
        return true
    }
    console.log(`   Propriedade não encontrada...`)
    return false
}
function adicionarLista(inputRecebido){
    console.log(`   ${inputRecebido} adicionado na lista`)
}


// =============================================== INICIO
// Run npm install prompt-sync in the terminal
const prompt = require('prompt-sync')();

console.clear()
saudacao()

const inputRecebido = receberInput()
const inputValido = validarInput(inputRecebido)

console.log(`   ${inputRecebido} = ${inputValido}`)

if (inputValido) {
    adicionarLista(inputRecebido)
}




console.log("")
// console.log("")

// ==============================================================
// O código deve rodar em um laço que vai receber propriedades até a pessoa digitar a palavra “SAIR”. 
// Quando isso acontecer, deve ser impressa no terminal a lista das propriedades ordenadas de A-Z uma em cada linha.
// ==============================================================
// Enquanto escolha diferente que SAIR, leia os atributos
// ---------------------------- "manual"
// Para cada atributo
// Primeira letra igual a PL
// Se a PL desse atributo vier antes do que a PL do proximo atributo: mantem posição
// Se não inverte as posiçoes
// Provavel incluir outras condiçoes e tratar erros
// ---------------------------- "auto"
// Deve haver comando para "sorted" que organiza um vetor/lista
// ----------------------------
//Retorna lista organizada
// ==============================================================