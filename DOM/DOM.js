
let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario");
let elementoPorTag = document.getElementsByTagName("p")



//Exibindo
console.log(elementosPorClass);
console.log(elementosPorClass[0]);//acessa a 1 posição do array
console.log(elementoPorID);
console.log(elementoPorTag[0].textContent);

//Modificando
elementoPorTag[0].textContent = "Codificando com o DOM"; //Modifica o conteudo do elemento
(elementoPorTag[0].style.color = "red");
(elementoPorTag[0].style.fontSize = "30px");



//---------DESAFIOS---------
//Exiba o 2 segundo elemento(item) da variavel elementos
//Crie uma variavel que tenha o valor de um elemento buscado pela sua tag
//Acesse a propriedade innerText da variavel elementoPorTag (é uma array, vão ter que acertar pela posiçào do elemento) e exiba no console.log 
//Acesse a propriedade Style.color e atribui (=) uma cor red em formato de string para a posição 0 da variavel elementoPorTag