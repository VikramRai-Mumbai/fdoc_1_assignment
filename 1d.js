console.log("Loaded file : 1d.js ");

function countsWords3(paragraph){
    let wordcount = 0;
    const cleantext = paragraph.replace(/[^a-zA-Z.? ]/g, "");
   const cleantextArray = cleantext.split(" ");
   cleantextArray.forEach(element => {
    wordcount++
   });


       console.log("Word Count (All): ",wordcount);
       return  wordcount;
   }