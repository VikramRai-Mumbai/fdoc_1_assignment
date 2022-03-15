console.log("Loaded file : 1c.js ");

function countsWords2(paragraph){
    let wordcount = 0;
    const cleantext = paragraph.replace(/[^a-zA-Z.? ]/g, "");
   const cleantextArray = cleantext.split(" ");
   cleantextArray.forEach(element => {
       if(element.length > 1) wordcount++
   });


       console.log("Word Count: ",wordcount);
       return  wordcount;
   }