function petNameGenerator(a){
    const vowels = 'AEIOUaeiou'
    if(vowels.includes(a[2])){
        return a.substr(0,4)
    }else{
        return a.substr(0,3)
    }
}

console.log(petNameGenerator('sachin'))
console.log(petNameGenerator('Elon'))

/*
sac
Elon
*/