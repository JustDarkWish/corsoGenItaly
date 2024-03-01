/* ------------------------------- Esercizio 9 ------------------------------ */

const lezione = "oggi andrò a lezione";
const parole = lezione.split(" ");

for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i][0].toUpperCase() + parole[i].substring(1);
}
parole.join('');

console.log(parole);