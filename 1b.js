
console.log("Loaded file : 1b.js ")

const paragraph_1b =  `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(paragraph){
     const result = paragraph.replace(/[^a-zA-Z.? ]/g, "");
        console.log(result);
        return  result;
    
    }
  