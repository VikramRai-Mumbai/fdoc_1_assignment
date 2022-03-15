console.log("Loaded file : 2b.js ");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
function randomUniqueArray() {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        console.log(array.slice(2));
   return array.slice(2)
}