let lorem = ("Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java");
let loremSplittata = lorem.split(' ');

for(i = 0; i < loremSplittata.length; i++){
    if(loremSplittata[i] == "Java"){
    console.log("Java")
    }
    else{
        console.log("Parola non trovata.")
    }
}