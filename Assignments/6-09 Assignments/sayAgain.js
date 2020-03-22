function sayAgain(str, n) {
    let result = ''
    for (let i = 1; i <= n; i++){
        result += str
    }
    return result
}

console.log(sayAgain("hi", 4))  //'hihihihi'
console.log(sayAgain("hi", 0))  //''
console.log(sayAgain("ok", 6))   //'okokokokokok'