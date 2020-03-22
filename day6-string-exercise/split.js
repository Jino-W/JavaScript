function hashTagGenerator(str){
    let result ='#';
    const word =str.split(' ');

    /* //for
    for(let i=0;i<word.length;i++){
        result+= word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
    }
    */


   //forEach 
   word.forEach(function(eachWord){
    result+= eachWord.charAt(0).toUpperCase() + eachWord.slice(1).toLowerCase();
   })
   
    return result;
}


console.log(hashTagGenerator('made in india'));
console.log(hashTagGenerator('we are Dct'));

/* o/p
#MadeInIndia
#WeAreDct
*/

