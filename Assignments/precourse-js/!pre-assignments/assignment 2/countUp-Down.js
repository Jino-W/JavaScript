/*
Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

Examples:

INPUT: countUpThenDown(2)
OUTPUT: [0, 1, 2, 1, 0]
INPUT: countUpThenDown(0)
OUTPUT: [0]
*/


function countUpThenDown(a){

    var n = [];
    
    for(var i = 0;i <= a;i++){
       n.push(i);      
    }
        
    for(var i = a;i >0;i--){
       n.push(i-1);      
    }
    
    return n;
}
    
    
console.log(countUpThenDown(5));   //[ 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0 ]

