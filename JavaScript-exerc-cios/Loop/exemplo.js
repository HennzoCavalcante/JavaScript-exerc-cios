//For - Loop contado
//Contato do 0 ao 10

// for(inicializador; condição; contador)

// for (let num = 0; num <= 10; num++) {
//     console.log("Dormammu, eu vim barganhar" + num)
// }
//Whilw - Loop condicional = Nào se sabe quantas vezes irá se repetir
// let salario = 1000

// while (salario < 5000) {
//     // salario = 100 + salario 
//     salario += 100

//     console.log("O salário é de R$: " + salario)
// }

 //DO whilw - loop condicional
// let aumento = 1000
// do {

//     console.log("Esse é o seu saldo:" + aumento)
//     aumento += 100
//     //aumento = 100 + aumento
// } while (aumento < 5000);

//Array

//               0          1        2        3          4         5
let frutas = ["Banana", "Laranja", "Maça", "Pitaya", "Melancia", "Uva"]

// Item especifico

// console.log(frutas[3])
// console.log(frutas[5])

//forEach  => Percorre uma lista

frutas.forEach(qualquercoisa => {
    console.log("A fruta é: " + qualquercoisa)

})

//Percorrer uma lista com for

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice])

    if (frutas[indice] == "Uva") {
        console.log("Eu gosto de " + frutas[indice])
    }
}