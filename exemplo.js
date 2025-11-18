//Alert - Apresenta uma mensagem na tela
// window.alert("Olá turma do Borges")
// //Confirm - Pergunta com OK/ Cancela (Retorna com um true ou false)
// window.confirm("O Jonas vai casar!")
// //Prompt - Pega o texto da tela
// window.prompt("Qual é o seu nome?")

//Comentário em linha// 
/*
Comentário em texto
*/
//Vai aparecer no inspencionar

/*console.log("Multimidia")

let nome = prompt("informe o seu nome: ")

console.log("Bem-vindo " + nome)*/

let numero1 = Number.parseInt(prompt("Digite o primeiro número: "))
let numero2 = Number.parseInt(prompt("Digite o segundo número: "))

let resultado = numero1 + numero2

let numero1 = Number.parseFloat(prompt("Digite o primeiro número: "))
let numero2 = Number.parseFloat(prompt("Digite o segundo número: "))

let resultado = numero1 + numero2

console.log(resultado)

let idade = window.prompt("Qual é a sua idade? ")

if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

switch (idade) {

    case "18":
        console.log("Maior de idade!")
        break;

    // case "27":
    //     console.log("Está perto de 30")

    default:
        console.log("Nada a dizer")
        break;
}