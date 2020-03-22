//a is divisible by b or not?
function isDivisible(a,b){
    return (a%b == 0)? true: false   //ternary operator
}



console.log(isDivisible(9, 3));     //true
console.log(isDivisible(9, 4));          //false
