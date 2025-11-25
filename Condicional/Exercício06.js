// Escreva um program que solicite o ano de nascimento
//  de uma pessoa e verifica se ela é maior de 18 anos.
// Exiba uma mensagem identificando se a pessoa é maior ou não.

let anoNascimento = parseInt(prompt("Digite o anos de nascimento"))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if (idade >= 18) {
    console.log("Maior de idade")
    console.log("Sua idade é " + idade)

}
else {
    console.log("Menor de idade")
    console.log("Sua idade é:" + idade)
}