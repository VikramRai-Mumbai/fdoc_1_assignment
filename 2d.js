console.log("Loaded file : 2d.js ");

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3]

function checkUniqueArray (array){
        let newset = new Set(array);
        if (array.length === newset.size)
        {
            console.log("true");
            return true;
        }
        else{
            console.log("false");
            return false;
           }
         
}