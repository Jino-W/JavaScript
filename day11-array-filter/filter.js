const numbers =[10,15,25,40,63,21];


//c style
function findAll(numbers, r){
    const result =[];
    for(i=0;i<numbers.length;i++){
        if(numbers[i]>=r){
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(findAll(numbers, 25));             //[ 25, 40, 63 ]
console.log(findAll(numbers,100))                //[]



//js style
function findAll1(numbers, r){
    const result1 = numbers.filter(function(number){
        return number>=r;
    })
    return result1;
}
console.log(findAll1(numbers,25))         //[ 25, 40, 63 ]
console.log(findAll1(numbers,100))       //[]