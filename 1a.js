console.log("Loaded file : 1a.js  ")

const paragraph_1a = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love";

function countWords (paragraph, word1, word2){

    let paraSplitted = paragraph.split(" ");
    let word1_count = 0; 
    let word2_count =0;
    paraSplitted.forEach(word => {
        if (word == word1)
            word1_count++;
        if (word === word2)
            word2_count++;
    });
    console.log(word1_count, word2_count);
    if (word1_count > word2_count)
    {
        let result = `The word "${word1}" more frequently occurred than "${word2}".`;
        console.log(result);
        return  result;
    }else if(word1_count < word2_count){
        let result = `The word "${word2}" more frequently occurred than "${word1}".`;
        console.log(result);
        return  result;
    }
    else if(word1_count === word2_count != 0){
        let result = `The word "${word2}" and "${word1}"  occurred equally.`;
        console.log(result);
        return  result;
    }else{
        let result = `The word "${word2}" and "${word1}"  not found in paragraph.`;
        console.log(result);
        return  result;
    }
       
      
    
}