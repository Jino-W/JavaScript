//find a character in the fiven string
function strCount(str, char){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}

const result= strCount('hello', 'o');
console.log(result);



