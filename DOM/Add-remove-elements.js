let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //Cria um elemento no HTML
let formularioElemento = document.getElementById("Formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "Paragráfo criado via JavaScript";//Poe um conteudo no p

secao[0].appendChild(novoParagrafo)

//Remover a tag label
formularioElemento.removeChild(labelElemento); //Remove o elemento label do formulario