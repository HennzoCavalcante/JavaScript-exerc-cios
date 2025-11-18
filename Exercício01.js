let login = prompt("Digite seu login:")

let senha = prompt("Digite a sua senha:")

if (login == "admin" && senha == "senha123") {
    console.log("Login correto!") 
} else {
    console.log("Login ou senha está incorreto, tente novamente.")
}
