
import * as modelo from "../models/modelos.js"
import promptSync from 'prompt-sync';
const prompt = promptSync();

export function receberInput(){
    let inputRecebido = prompt('   Digite uma propriedade CSS: > ');
    return inputRecebido
}

export function validarInput(inputRecebido){
    for (let i = 0; i < modelo.listaItens.length; i++) {
        if (inputRecebido == modelo.listaItens[i]) {
            return true
        } 
    }
    return false
}

//========================================
export function adicionarNaLista(inputRecebido){
    console.log(`   ${inputRecebido} adicionado na lista\n`)
}






