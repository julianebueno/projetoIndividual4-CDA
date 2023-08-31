// Firula is a necessity, a commodity, a reason to live. Xb
let firula = ".oOo."
let tamanhoFirula = 14

export function saudacao(){ // primeira mensagem com a info de como sair
    console.log("\n",firula.repeat(tamanhoFirula),"\n")
    console.log(".  Organizador de Propriedades CSS\n")
    console.log(".  Para SAIR, digite sair\n")
    console.log(firula.repeat(tamanhoFirula),"\n")
}

export function msgSair(){ // mensagem de saída do loop junto do app
    console.log("\n.  App encerrado\n")
    console.log(firula.repeat(tamanhoFirula),"\n")
}

export function msgInputInvalido(){
    console.log(".  Propriedade inválida, digite novamente\n")
}

export function msgInputValido(inputRecebido){
    console.log(`.  ${inputRecebido} adicionado na lista\n`)
}

export function listaFinal(lista){ // apresentando a lista final
    console.log(".  Lista final com as propriedades digitadas:\n")
    for (let i = 0; i < lista.length; i++) {
        console.log(`.  ${lista[i]}`)
    }
    console.log("\n",firula.repeat(tamanhoFirula),"\n")
}