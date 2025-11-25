// 6. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let soma = parseInt(prompt("Escolha um número"))
let num = 1
let resultado = 0

while (num <= soma) {
    resultado = resultado + num
    num++
}

console.log("Soma total: ", resultado); 