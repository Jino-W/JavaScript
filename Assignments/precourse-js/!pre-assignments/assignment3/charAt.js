/*
Write a function called charAt which accepts a string and an index (number) and returns the character at that index. 

The function should return an empty string if the number is greater than the length of the string.

Examples:

charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
*/


function charAt(a,b){
    
    if(b>=a.length){
        return '';
    }

    else{
        for(var i=0;i<a.length;i++){
            if(i===b){
                return a[i];
            }
        }
    }
    
}


console.log(charAt('awesome', 5));          // 'm'
console.log(charAt('awesome', 12));          // ''
console.log(charAt('awesome', 2));           // 'e'


