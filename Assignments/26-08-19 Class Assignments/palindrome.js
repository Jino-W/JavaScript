// palindrome
function palindrome(str) {
    if (str.length == 0) {
        return 'invalid input'
    } else {
        let rev = '';
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
        if (rev === str) {
            return true;
        } else {
            return false;
        }
    }
}


console.log(palindrome('racecar'))   //true
console.log(palindrome('jino'))        //false
console.log(palindrome('jinonij'))    //true