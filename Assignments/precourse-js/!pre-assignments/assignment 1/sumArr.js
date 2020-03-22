/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

1. sumPos([1,-4,7,12]) returns 20

2. sumPos([]) returns 0

Note: if there is nothing to sum, the sum is default to 0.
*/

function sumPos(a){
    var sum = 0;              //we can also use "let sum=0;"
    for (var i = 0; i < a.length; i++){
        if (a[i] >= 0){
            sum = sum + a[i];
        }
    }
    return sum;
}
var n = [1, -4, 7, 12];
var m = [];
console.log(sumPos(n));
console.log(sumPos(m));