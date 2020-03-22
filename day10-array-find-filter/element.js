const numbers = [10, 20, 30, 40, 50];

//c style
function findNum(numbers, n){
    let result1;
    for(i=0;i<numbers.length;i++){
        if(numbers[i]>n){
            result1 =numbers[i];
            break;
        }
    }
    return result1;
}
console.log(findNum(numbers, 25));   //30
console.log(findNum(numbers, 55));   //undefined



//js style (es5)
function findNumJs(numbers, n){
    const result=numbers.find(function(number){
        return number>n;
    })
    return result;

    //return numbers.find(number => number>n);              //es6 ->arrow function
}

console.log(findNumJs(numbers, 25));   //30
console.log(findNumJs(numbers, 55));   //undefined


/*Real time Application:
1.Amazon 
array.length -> no. of cart items
*/


