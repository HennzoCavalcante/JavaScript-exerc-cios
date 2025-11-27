
let Menu = window.prompt("Informe um número de 1 a 5:")

switch (Menu !== 0) {

    case "1":
        login()
        break;

    case "2":
        media()
        break;

    case "3":
        anoNascimento()
        break;

    case "4":
        número()
        break;

    case "5":
        peso()
        break;

    default:
        console.log("Informe um número valido")
        break;
}

function login() {
    let login = prompt("Digite o seu usuário: ")

    let senha = prompt("Digite a sua senha: ")

    if (login == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!")
    }
    else {
        console.log("Você não tem permissão de acesso!")
    }
}

login()

function media() {
    let nota01 = Number.parseFloat(prompt("Digite a sua primeira nota"))
    let nota02 = Number.parseFloat(prompt("Digite a sua segunda nota"))
    let nota03 = Number.parseFloat(prompt("Digite a sua terceira nota"))
    let nota04 = Number.parseFloat(prompt("Digite a sua quarta nota"))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    console.log("A média do aluno é: " + media)

    if (media >= 7) {
        console.log("Aprovado!")

    } else if (media >= 5 && media < 7) {
        console.log("Recuperação!")
    }

    else {
        console.log("Reprovado!")
    }
}

media()

function anoNascimento() {
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
}

anoNascimento()

function número() {
  let número = parseInt(prompt("Informe um número inteiro"))

if (número % 2 == 0) {
    console.log("o número digitado é par")

} else {
    console.log("o número digitado é impar")
}
}

número()

function peso() {
    let peso = parseFloat(prompt("Informe o seu peso (em Kg)"))
    let altura = parseFloat(prompt("Informe a sua altura (em metros)"))

    let IMC = peso / (altura * altura)

    console.log("Seu IMC é?: " + IMC.toFixed(2))

    if (IMC < 18.5) {
        console.log("Abaixo do peso")

    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Peso normal")
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        console.log("Sobrepeso")
    }

    else if (IMC >= 30 && IMC <= 34.9) {
        console.log("Obesidade grau 1")
    }

    else if (IMC >= 35.0 && IMC <= 39.9) {
        console.log("Obesidade grau 2")
    }

    else {
        console.log("Obesidade grau 3")
    }

}
peso()

console.log("Você digitou 0. O programa foi encerrado!")

