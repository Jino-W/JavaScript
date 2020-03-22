function prime(number){
    let i;
    for(i=2;i<=number;i++){
        if(number%i == 0){
            break;
        }
    }
    return i==number ? true : false
}


console.log(prime(5))  //true

console.log(prime(21)) //false