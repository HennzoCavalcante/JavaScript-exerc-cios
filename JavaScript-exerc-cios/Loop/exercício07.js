// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let num = parseInt(prompt("Insira um número para a contagem regressiva:"))

console.log("Contagem regressiva começando apartir de:")

do {
    console.log("Contagem regressiva", num)
    num--

} while (num >= 0);

// while (num <= 0){
//     console.log(num)
//     num = num -1
// }
//  console.log("COntahem regressiva finalizada!")
