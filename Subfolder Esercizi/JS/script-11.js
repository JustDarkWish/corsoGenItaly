/* ------------------------------ Esercizio 12 ------------------------------ */

let cicloForEs8 = document.getElementById("golosoEs8")
let newCicloFor = cicloForEs8.textContent;

let stringaReversed = "";
for (let i = newCicloFor.length - 1; i >= 0; i--) {
    stringaReversed += newCicloFor[i];
}

console.log(stringaReversed);