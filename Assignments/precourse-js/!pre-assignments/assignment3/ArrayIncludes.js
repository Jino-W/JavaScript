/*Write a function called includes, which accepts an array and a number.

The function should return true if the value exists in the array and false if it does not.

Do not use the built in Array.includes() function!

Examples:

includes([1, 2, 3, 4], 4) // true

includes([1, 2, 3, 4], 14) // false

includes([], 14) // false
*/


function includes(a, b) {
    if (a.length === 0) {
        return false;
    }
    else {
        for (i = 0; i < a.length; i++){
            if (a[i] === b){
               return true;
            }
        }
        return false;
    }
}

console.log(includes([1, 2, 3, 4], 4));       //true
console.log(includes([1, 2, 3, 4], 14));      //false
console.log(includes([], 14));                //false
