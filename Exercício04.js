// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota01 = Number.parseFloat(prompt("Digite a sua primeira nota"))
let nota02 = Number.parseFloat(prompt("Digite a sua segunda nota"))
let nota03 = Number.parseFloat(prompt("Digite a sua terceira nota"))
let nota04 = Number.parseFloat(prompt("Digite a sua quarta nota"))

let media = (nota01 + nota02 + nota03 + nota04) / 4

if (media >= 7) {
    console.log("Aprovado!")

} else if ( media  >=5 && media <7 ) {
    console.log("Recuperação!")
}

else {
    console.log("Reprovado!")
} 


