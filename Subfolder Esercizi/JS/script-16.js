/* let dataRefresh = document.getElementById("dataAttuale")
const dataAttuale = new Date();
console.log(dataAttuale);

const timestamp = dataAttuale.getTime();
*/

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let actualData1 = day + "/" + month + "/" + year;
let dataAttuale = document.getElementById("actualData");
    dataAttuale.innerHTML = "La data di oggi è: " + actualData1;

let oraAttuale = date.getHours();
let minutiAttuali = date.getMinutes();
let secondiAttuali = date.getSeconds();

let orario = oraAttuale + "-" + minutiAttuali + "-" + secondiAttuali;

if(oraAttuale >= 2 && oraAttuale < 12){
    console.log("Buon giorno.")
} else if(oraAttuale >= 12 && oraAttuale < 21){
    console.log("Buona sera.")
} else if(oraAttuale >= 21 && oraAttuale < 2){
    console.log("Buona notte.")
}