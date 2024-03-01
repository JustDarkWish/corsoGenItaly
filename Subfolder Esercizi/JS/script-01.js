/* ------------------------------- Esercizio 2 ------------------------------ */

/* let annoNascita = document.getElementById("form01");
    annoNascita.innerHTML = 'Data di nascita <br><input type="text">';

let dataAttuale = document.getElementById("form02");
    dataAttuale.innerHTML = 'Anno attuale <br><input type="text">'; */

    let annoNascita = prompt("Qual'è il tuo anno di nascita?")
    let annoAttuale = 2024;
    
    let eta = annoAttuale - annoNascita;
    eta.innerHTMl = "Hai " + eta + "anni."
    
    console.log(eta);