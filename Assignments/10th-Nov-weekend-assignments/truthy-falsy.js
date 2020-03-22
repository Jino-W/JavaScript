function oneElementOut(a,b,c){
    console.log("a,b,c",a,b,c)
    const result = []  //[ 1, 2 ]    [ true ]
    const array = []
    array.push(a, b, c)
    console.log("array",array)
    // for (i = 0; i < array.length - 1; i++) {
    //     if (array[i]) {
    //         result.push(array[i])
    //     }
    // }
    array.forEach(a=>{
        if(a){
            result.push(a)
        }
    })
    console.log("result",result)
    if (result.length === 1) {
        return result[0] ? true : false
    }
    else{return false}
}


console.log(oneElementOut(0,1,2))  //false
console.log(oneElementOut(false,false,true))   //true