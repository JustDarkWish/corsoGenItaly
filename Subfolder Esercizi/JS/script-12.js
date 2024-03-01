for(i = 1; i <=100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("Ciao, Mondo")
    }
    else if(i % 3 == 0){
        console.log("Ciao")
    }
    else if(i % 5 == 0){
        console.log("Mondo")
    }
    else{
        console.log(i);
    }
}