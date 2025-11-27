function cumprimento() {

    let NomePessoa = prompt("Digite o seu nome:")
    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {
        alert("Bom dia!" + NomePessoa)

    } else if (horaAtual >= 13 && horaAtual < 18) {
        alert("Boa tarde!" + NomePessoa)

    } else { ("Boa noite!" + NomePessoa) }
}

cumprimento()

let pessoa = {
    nome: "Artur", 
    idade: 17,
    sobrenome: "Oliveira",
    estado: "SP",
    cidade: "SCS",

}

console.log(pessoa.nome)
console.log(pessoa.idade)

for(let chave in pessoa){
    console.log(chave + " : " + pessoa[chave])
}