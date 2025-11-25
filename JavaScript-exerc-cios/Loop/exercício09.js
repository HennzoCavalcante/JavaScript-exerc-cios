// 9. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// let num = parseInt(prompt("DIgite 0:"))

// while (num !== 0){
// num = parseInt(prompt("Digite 0:"))
// }
// console.log(num)

// if(n == 0){
//     window.alert("0 selecionado!")
// }

do {
    num = parseInt(prompt("DIgite um número (Digite 0 para sair):"))
} while (num !== 0);

console.log("Você digitou 0. O programa foi encerrado!")