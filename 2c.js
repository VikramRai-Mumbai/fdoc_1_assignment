console.log("Loaded file : 2c.js ");

function reverseArray(array){

    let a = 0;
    if (array.length % 2 === 0)
        a = 0;
        a = 1;
    for (let i = 0; i <= array.length/2-a; i++){
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    console.log(array);
    return array;

}