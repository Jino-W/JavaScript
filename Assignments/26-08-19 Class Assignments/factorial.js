//factorial

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++){
        fact *= i;
        console.log(i,fact);
    }
    return fact;
}


console.log(factorial(4));         //24
console.log(factorial(5));        //120

/*
1 1
2 2
3 6
4 24
24
1 1
2 2
3 6
4 24
5 120
120
*/