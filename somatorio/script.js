let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let somatorio = document.querySelector("#somatorio");

/* 1-Valor digitado após clicar no botão
   2-Fazer o somatorio
   3-Exibir o somatorio na tela 
*/

var soma = 0;

function somar(){
    for (let i = 1; i < input.value; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            soma += i;
            console.log(i)
        }     
    }
    somatorio.innerHTML = soma;
    soma = 0;
}
