function doubleTheValue(array,b){
    if(array.length==0){
        return []
    }else{
    for(let i=0;i<array.length;i++){
        if(array[i]==b){
            b = b*2; 
        }
    }
    return b;
    }
}

console.log(doubleTheValue([1,2,3,4,8], 2))
/*
Explanation: The initial value of b is 2. Traversing from the first element, 2 is found in 2nd position, so doubling b we get b = 4 . 4 is found in 4th position so doubling b we get b = 8. 8 is found in 5th position, so doubling b we get b = 16.
*/
console.log(doubleTheValue([1,2,3,4,8], 5));
console.log(doubleTheValue([], 1));

/* o/p:
16
5
[]
*/