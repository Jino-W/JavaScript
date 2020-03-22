/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/


function binaryToNumber(a){
    var decimal=0;
    for(var i=a.length-1;i>=0;i--){
        decimal=decimal+(Math.pow(2,i))*a[a.length-1-i];
    }
    return decimal;
    
}

var b=[1,0,1,1], c = [0, 1, 0, 1], d = [0, 1, 1, 0], e = [0, 0, 1, 0],f = [0, 0, 0, 1];


console.log(binaryToNumber(b));
console.log(binaryToNumber(c));
console.log(binaryToNumber(d));
console.log(binaryToNumber(e));
console.log(binaryToNumber(f));


// sum=(8*b[0])+(4*b[1])+(2*b[2])+(1*b[3])

