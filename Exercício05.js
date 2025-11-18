// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let número01 = Number.parseFloat(prompt("Digite o primeiro número"))
let número02 = Number.parseFloat(prompt("Digite o segundo número"))
let número03 = Number.parseFloat(prompt("Digite o terceiro número"))

if (número01 < número02 && número02 < número03) {
    console.log("Os números está em ordem crescente!")
} else {
    console.log("Os números não estão em ordem crescente")
}