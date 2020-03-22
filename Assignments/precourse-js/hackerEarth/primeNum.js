function prime(numberUpto){
    const arr = []

    for(number = 1;number<numberUpto;number++){
        if(number == 1){
            arr.push(number)
        }
        for(fact=2;fact<number;fact++){
            if(number%fact == 0){
                break
            }
        }
        if(fact == number){
            arr.push(number)
        }
    }
    return arr
}

console.log(...prime(9))