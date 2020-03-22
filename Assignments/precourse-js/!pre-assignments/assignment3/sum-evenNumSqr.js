/*
Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20

squareEvenNumbers([1, 3, 5, 7]); // 0

squareEvenNumbers([5, 6, 7]); // 36
*/


function squareEvenNumbers(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0){
            sum=sum+a[i]**2;   //sum = sum + Math.pow(a[i],2);
        }
    }
    return sum;
}


console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // 20

console.log(squareEvenNumbers([1, 3, 5, 7])); // 0

console.log(squareEvenNumbers([5, 6, 7])); // 36