function factorial(num) {
    let sum =1
    for (let i = num; i >0; i--){
        sum *=i
    }
    return sum
}

console.log(factorial(2))