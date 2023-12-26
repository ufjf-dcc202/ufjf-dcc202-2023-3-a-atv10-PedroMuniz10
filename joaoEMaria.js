// joaoEMaria.js

console.log('módulo joaoEMaria');

let joao = 1;
let maria = 2;

function getMaria() {
    return maria;
}

function getJoao() {
    return joao;
}

function setMaria(novoValor) {
    maria = novoValor;
}

function setJoao(novoValor) {
    joao = novoValor;
}

export { getJoao, getMaria }