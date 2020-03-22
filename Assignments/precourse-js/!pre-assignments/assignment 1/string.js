/*
Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z') // => 0
*/


function strCount(a,b){
    var sum = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] === b) {
            sum = sum + 1;
        }
    }
    return sum;
}


console.log(strCount('Hello', 'o'));             //1
console.log(strCount('Hello', 'l'));             //2
console.log(strCount('Hello', 'z'));             //0