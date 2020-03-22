function preFill(num, val){
    const result =new Array(num);
    result.fill(val);
    return result;
}

console.log(preFill(3, 'hello'));           //[ 'hello', 'hello', 'hello' ]


function preFill1(num1, val1){
    const result1 =[];
    for(let i=0;i<num1;i++){
        result1.push(val1)
    }
    
    return result1;
}

console.log(preFill1(3, 'hello'));                //[ 'hello', 'hello', 'hello' ]