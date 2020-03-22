//M3
function reverseVowels(str) {
    //converting string into array by split method
    let result =str.split('');               //original string in array form     
    console.log(result);                    //[ 'H', 'e', 'l', 'l', 'o', '!' ]

    let strVowArr =[];      
    
    const vowels ='aeiouAEIOU';

    //checking for vowels and saving vowels alone in seperate array strVowArr
    for(let i = 0; i < result.length; i++){
        if(vowels.includes(result[i])) {
            strVowArr.push(result[i]);
        }
    }

    console.log(strVowArr);                        //[ 'e', 'o' ]
    
    //replacement of vowels(in reverse order) in result array
    for(let i = 0; i < result.length; i++){
        if(vowels.includes(result[i])) {
            result[i]=strVowArr.pop();    //pop method return the removed element from the last end of the array ->  so, result[1] = 'o'        
        }
    }
    //converting array back to string
    return result.join('') 
}

console.log(reverseVowels("Hello!")); // "Holle!"
console.log(reverseVowels("Tomatoes")); // "Temotaos"
console.log(reverseVowels("Reverse Vowels In A String")); // "RivArsI Vewols en e Streng"