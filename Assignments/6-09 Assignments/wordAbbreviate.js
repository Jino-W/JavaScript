function abbreviate(str) {
    if (str.length == 0) {
        return ''
    } else {
        const array = str.split(' ')
        let result = ''
        array.forEach((a) => {
            result += a[0].toUpperCase()
        })
        return result.split('').join('.')
    }
}

console.log(abbreviate('Sam Harris'))  //'S.H'
console.log(abbreviate('Patrick Feeney'))     //'P.F'