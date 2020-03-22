/*
Write a function for multiplying a given number by eight if it is an even number and by nine otherwise.

TEST CASE : 

1. multiplyMe(2)
returns 16

2. mutiplyMe(3)
returns 27
*/



function multiplyMe(a) {
    if (a % 2 === 0) {
        return a * 8;
    }
    else {
        return a * 9;
    }
}


console.log(multiplyMe(2));              //16
console.log(multiplyMe(3));              //27