//print 
function charAt(str, index){
    let result='';
    const char = str[index];
    if(char==undefined){
        return result;
    }
    else{
        result=char;
        return result;
    }
}

console.log(charAt('awesome', 3));
console.log(charAt('awesome', 12));