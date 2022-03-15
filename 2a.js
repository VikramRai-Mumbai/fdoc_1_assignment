console.log("Loaded file : 2a.js ");

function triangle(){
    for (let i = 0; i <= 6; i++){
        for (let j = 0; j <= i; j++){
            console.log("#")
        }
        console.log();
    }
    
    //by using only console.log
    for (let line = "#"; line.length < 8; line += "#"){
        console.log(line);
}

}