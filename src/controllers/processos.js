import * as modelo from "../models/modelos.js" // lista de propriedades válidas
import promptSync from 'prompt-sync'; // pacote pra ler inputs no terminal
const prompt = promptSync();

export function receberInput(){ // recebendo a propriedade digitada
    let inputRecebido = prompt('   Digite uma propriedade CSS: > ');
    return inputRecebido
}

export function validarInput(inputRecebido){ // validação do input
    for (let i = 0; i < modelo.listaItens.length; i++) {
        if (inputRecebido == modelo.listaItens[i]) {
            return true // retorna true se tiver na lista modelo de propriedades
        } 
    }
    return false // retorna false, pq se sair do loop é que não tem na lista modelo
}

export const lista = []
export function adicionarNaLista(inputRecebido){
    lista.push(inputRecebido) // adicionando o input já validado na lista
    lista.sort() // organizando a lista em ordem alfabética
}