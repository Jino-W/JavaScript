function frequency(str) {
    const result = {}
    for (i = 0; i < str.length;i++){
        if (result[str[i]]) {
            result[str[i]]++
        } else {
            result[str[i]] = 1
        }
    }
    return result
}

console.log(frequency('abca'))
console.log(frequency(''))