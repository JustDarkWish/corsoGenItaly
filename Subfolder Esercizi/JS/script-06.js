/* ------------------------------- Esercizio 7 ------------------------------ */

let num01 = prompt("Inserisci il primo numero qui: ")
let num02 = prompt("Inserisci il secondo numeri qui: ")

if(num01 > num02){
    console.log("Il numero più vicino al 100 è: " + num01);
}
else if(num01 < num02){
    console.log("Il numero più vicino al 100 è: " + num02);
}
else if(num01 = num02){
    let errore = alert("I numeri inseriti sono uguali tra loro! Aggiorna e prova di nuovo.")
}