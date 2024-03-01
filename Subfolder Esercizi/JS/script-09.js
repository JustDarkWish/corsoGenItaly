/* ------------------------------ Esercizio 10 ------------------------------ */

let alfabeto = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
let stringa1 = '';
for (let i = 0; i < 22; i++) {
    let random1 = Math.random() * alfabeto.length;
    stringa1 += alfabeto.charAt(random1)
}
console.log(stringa1)