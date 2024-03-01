/* ------------------------------ Eservizio 11 ------------------------------ */

let numeriInteri1 = window.prompt("Inserisci il primo numero intero: ");
let numeriInteri2 = window.prompt("Inserisci il secondo numero intero: ")

if(numeriInteri1 > numeriInteri2){
    console.log(numeriInteri1);
}
else if(numeriInteri2 > numeriInteri1){
    console.log(numeriInteri2);
}
else if(numeriInteri1 == numeriInteri2){
    alert("I numeri sono uguali!");
}