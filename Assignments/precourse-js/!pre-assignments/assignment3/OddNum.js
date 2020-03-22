/*
Write a function called threeOddNumbers, which accepts an array of numbers and returns true if any three consecutive numbers sum to an odd number.

Examples:

threeOddNumbers([1,2,3,4,5]) // true

threeOddNumbers([0,-2,4,1,9,12,4,1,0]) // true

threeOddNumbers([5,2,1]) // false

threeOddNumbers([1,2,3,3,2]) // false
*/


function threeOddNumbers(a) {
    for (var i = 0; i < a.length-2; i++){
        var s= a[i]+a[i+1]+a[i+2];
        if (s%2 !== 0){
            return true;
        }
    }
    return false;
}

console.log(threeOddNumbers([1,2,3,4,5]));            //true            
console.log(threeOddNumbers([0,-2,4,1,9,12,4,1,0]));  //true   
console.log(threeOddNumbers([5,2,1]));                //false
console.log(threeOddNumbers([1,2,3,3,2]));            //false
console.log(threeOddNumbers([]));                     //false

//or


function threeOddNumbers(a) {
    for (var i = 2; i < a.length; i++){
        var s= a[i-2]+a[i-1]+a[i];
        if (s%2 !== 0){
            return true;
        }
    }
    return false;
}

console.log(threeOddNumbers([1,2,3,4,5]));               //true
console.log(threeOddNumbers([0,-2,4,1,9,12,4,1,0]));     //true
console.log(threeOddNumbers([5,2,1]));                   //false
console.log(threeOddNumbers([1,2,3,3,2]));               //false
console.log(threeOddNumbers([]));                        //false












// no.of odd number >=3 :true         ,<3 :false


function threeOddNumbers(a) {
    var c=0;
    for (var i = 0; i < a.length; i++){
        if (a[i] % 2 !== 0){
            c=1+c;
        }
    }
    if(c>=3){
        return true;
    }
    else{
        return false;
    }
}


console.log(threeOddNumbers([1, 2, 3, 4, 5]));             //true
console.log(threeOddNumbers([]));                          //false
console.log(threeOddNumbers([2,1,5]));                     //false
