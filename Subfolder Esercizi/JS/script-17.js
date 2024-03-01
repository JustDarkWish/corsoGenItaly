/* ES1 Scrivi, utilizzando if-statement, un programma per trovare il numero più grande tra 5 numeri. Mostra sulla pagina i 5 numeri scelti in una lista non ordinata e in un paragrafo sottostante indica qual è il numero più grande. */

let num1 = [50, 33, 42, 12, 80];
let randomNumber = '';

let listaUl = document.getElementById("listino")
listino.innerHTML = "<li> 50 </li>" + "<li> 33 </li>" + "<li> 42 </li>" + "<li> 12 </li>" + "<li> 78 </li>";

let biggestNumber = num1[0];
if(num1[1] > biggestNumber){
    biggestNumber = num1[1];
}
if(num1[2] > biggestNumber){
    biggestNumber = num1[2];
}
if(num1[3] > biggestNumber){
    biggestNumber = num1[3];
}
if(num1[4] > biggestNumber){
    biggestNumber = num1[4];
}
if(num1[5] > biggestNumber){
    biggestNumber = num1[5];
}

console.log(biggestNumber)

elNumerito = document.getElementById("pickedNumber");
pickedNumber.innerHTML = "Il numero più grande è: " + biggestNumber;