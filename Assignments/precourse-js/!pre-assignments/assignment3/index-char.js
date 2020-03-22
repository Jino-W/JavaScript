/*
Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or -1 if the character is not found.

Do not use the built in String.lastIndexOf() function!

Examples:

stringLastIndexOf('awesome', 'e'); // 6

stringLastIndexOf('awesome', 'z'); // -1
*/



function stringLastIndexOf(a, b) {
    for (i = a.length-1; i >= 0; i--){
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
}


console.log(stringLastIndexOf('awesome', 'e'));       //6(last or higher index)
console.log(stringLastIndexOf('awesome', 'z'));       //-1