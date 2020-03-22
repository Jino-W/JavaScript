//M1  -> array

function reverseVowels(str) {
    let result =[];                   //consonents
    let positions = [];              //vowel's position
    let revArr =[];                      //vowels  [ 'e', 'o' ]

    const arrStr = str.split('');
    const vowels ='aeiouAEIOU'


    for(let i = 0; i < arrStr.length; i++){
        if(vowels.includes(arrStr[i])) {
            revArr.push(arrStr[i]);
            positions.push(i);

        }
        else{
            result.push(arrStr[i]);
        }
    }
    
    console.log(result);                    //[ 'H', 'l', 'l', '!' ]
    console.log(positions);                 //[ 1, 4 ]
    let replace = revArr.reverse();         //[ 'o', 'e' ]  ->:reversed vowels 
    console.log(replace);

    for(let j=0;j<replace.length;j++){
        result.splice(positions[j], 0, replace[j]);       //splice(positionsToBeInsert, no.OfElementsToDelete, byWhichElementToBeInsert)
    }
    console.log(result);                     //[ 'H', 'o', 'l', 'l', 'e', '!' ]
    return result.join('');

}

console.log(reverseVowels("Hello!"));        //'Holle!'
console.log(reverseVowels("Reverse Vowels In A String"));   //'RivArsI Vewols en e Streng'
console.log(reverseVowels("Tomatoes"));    //'Temotaos'


//---------------------------------

/*

//string (* program is not completed)
function reverseVowels(str) {
    
    let result = '';
    let revArr =[];
    
    //let finalRes =''
    let positions = [];
    const arrStr = str.split('');
    const vowels ='aeiou'


    for(let i = 0; i < arrStr.length; i++){
        if(vowels.includes(arrStr[i])) {
            revArr.push(arrStr[i]);    //pushing vowels into an revArrarray
            positions.push(i);        // pushing the index value of vowels into an position-array
        }
        else{
            result+=arrStr[i];        //saving consonents alone as string
        }
    }

    let replace = revArr.reverse().join('');
    console.log(replace);                             //'oe'
    console.log(positions);
    let result1 =''
    for(let j=0;j<replace.length;j++){
        result1 += result.slice(j,positions[j]) + replace[j];
    }

    return result1;                                    //'hll!'
}
console.log(reverseVowels("Hello!")); // "Holle!"

console.log(reverseVowels("Tomatoes")); // "Temotaos"


    // use if want
    (
    for(let i=0;i<replace.length;i++){
    
        finalRes = result.replace(' ',replace[i]);
        console.log(finalRes)
    }
    
   for(let j=0;j<replace.length;j++){
    result.splice(positions[j], 0, replace[j]);       
    }
    )
    
*/


