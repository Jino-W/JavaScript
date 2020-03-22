function primeFactorsTo(num) {
    let n
    let i
    const result = [2]
    for (n = 3; n <= num; n++) {
        for (i = 2; i <= n; i++) {
            if (n % i == 0) {
                break;
            }
        }
        if(i==n){
            result.push(n)
        }
    }
    return result
}


console.log(primeFactorsTo(5))
console.log(primeFactorsTo(13))


// [ 2, 3, 5 ]
// [ 2, 3, 5, 7, 11, 13 ]