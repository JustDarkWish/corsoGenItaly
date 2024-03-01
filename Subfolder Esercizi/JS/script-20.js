let addicted = 0;

for(i = 1; i < 1000; i++){
    if(i % 3 === 0 || i % 5 == 0){
        addicted += i;
    }
}
console.log("Il totale è: " + addicted);