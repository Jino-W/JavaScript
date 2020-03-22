//M1
function askPolitely(sentence) {

    //checking for normal sentence like end with fullstop
    if(sentence[sentence.length-1] == '.'){
         return sentence;     
    }
    //sentence end with '?'
    else{
        const result = sentence.split(' ');  //split the sentence as array
            // if last element in array = 'please?'  -> return join the array and return
            if (result[result.length - 1] == 'please?') {
                return result.join(' ');    //(or) return sentence;
            }
            // if there is no word like 'please', then remove the '?' and add 'please?'
            else{
                const str = result.pop();   //pencil?
                let add ='';
                for(let i=0;i<str.length-1;i++){
                    add += str[i];                    // add = p e n c i l  (removing ques mark)
                }
                result.push(add,'please?');        //pencil, please?
                return result.join(' ');   
            }
    }
}
    

console.log(askPolitely("May I borrow your pencil?"));  //have to add please
console.log(askPolitely("May I borrow your pencil please?"));  // print as it is
console.log(askPolitely("My name is Grace Hopper.")); // print as it is

//-------------------------------


//M2
function Politely(str){
    let result=''
    //if(last char ='?'   &&   when split as array, last elenemt != 'please?')
    if (str[str.length-1]=='?' && str.split(' ').pop()!=='please?'){
        result= str.split('')   //split sentence as array
        result.pop()           //remove last element
        result=result.join('')+' please?'    //then join and concat with 'please?'
    }
    //if(normal sentence(end with '.')    &&   when split as array, last elenemt = 'please?' )
    else{
        result=str     //print as it is
    }
    return result
}

//print by adding 'please' before '?'
console.log(Politely("May I borrow your pencil?"));
//print as it is
console.log(Politely("May I borrow your pencil please?"));
console.log(Politely("My name is Grace Hopper."));