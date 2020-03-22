//M1 -> split()
function swapCase(str){
    const arrStr = str.split(' ');
    let result = '';
    if(str.length == 0){
        return 'invalid input';
    }
    for (let i = 0; i < arrStr.length; i++){
        
        for (let j = 0; j < arrStr[i].length; j++){
            if (arrStr[i][j] == arrStr[i][j].toUpperCase()) {
                result += arrStr[i][j].toLowerCase();
            }
            else if(arrStr[i][j] == arrStr[i][j].toLowerCase()){
                result += arrStr[i][j].toUpperCase();
            }
            
        }
        if(result.length<=str.length){
            result +=' ';
        }
    }
    return result;
}

console.log(swapCase('The Quick Brown Fox'));
console.log(swapCase('jInoESther'));
console.log(swapCase(''));

//------------------------------ (or) -----------------------------------

//M2*

function swapCase1(str1){
    let result = '';
    if(str.length == 0){
        return 'invalid input';
    }
    for (let i = 0; i < arrStr.length; i++){
        if(str1[i]==str[1].toUpperCase()){     //checking, character == upper case of char
            result+=str[1].toLowerCase();   // T -> t
        }
        else if(str1[i]==str[1].toLowerCase()){
            result+=str[1].toUpperCase();
        }
    }    
    return result;
}


console.log(swapCase1('The Quick Brown Fox'));        //'tHE qUICK bROWN fOX'
console.log(swapCase1('jInoESther'));
console.log(swapCase1(''));