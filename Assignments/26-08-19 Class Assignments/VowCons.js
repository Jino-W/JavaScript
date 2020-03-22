//vowels, consonents

function isAlt(str) {
    const vowels = 'aeiou';
    for (let i = 0; i < str.length-1; i++){
        if (vowels.includes(str[i])  && vowels.includes(str[i+1])){
            console.log(str[i], str[i+1])
            return false
        }else if(!vowels.includes(str[i]) && !vowels.includes(str[i+1])){
            console.log(str[i], str[i+1])
            return false
        }
            
    }
    return true;
}

console.log(isAlt("amazon")) // true

console.log(isAlt("apple")) // false

console.log(isAlt("banana")) // true