//filter method

//finding even numbers
const numbers = [10,15,20,25,30,35,40];
function evenNum(numbers){
    const result = numbers.filter(function(number){
        return number%2 == 0;
    })
    return result;
    /*
    retutn numbers.filter(function(number){
        return number%2 == 0;
    })
    */
}
console.log(evenNum(numbers));         //[ 10, 20, 30, 40 ]


//finding the passwords which have the length>=7
const passwords =['secret123', 'scret', '123', 'mypassword', 'p@ssw@rd'];
function strongPass(passwords){
    return passwords.filter(function(pass){
        return  pass.length>=7
    })
}
console.log(strongPass(passwords))             //[ 'secret123', 'mypassword', 'p@ssw@rd' ]

