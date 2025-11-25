// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let num = parseInt(prompt("Insira um número:"))

do {
    console.log("Contagem regressiva" , num)
    num--
    
} while (num >= 0);