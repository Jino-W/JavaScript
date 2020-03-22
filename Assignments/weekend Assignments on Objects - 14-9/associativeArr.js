function tallyPoints(str){
    //1) new arr
    const result = new Array()   
    for(const char of str){
        sChar = char.toLowerCase()
        if (result[sChar]) {
            char == char.toUpperCase() ? result[sChar]-- : result[sChar]++
        } else {
            char == char.toUpperCase() ? result[sChar]= -1 : result[sChar] = 1
        }
    }

    console.log(result)   //[ d: 2, b: 2, a: 1, c: 0, e: -2 ]

    console.log(Object.keys(result)) //[ 'd', 'b', 'a', 'c', 'e' ]

    //alphabet sort 
    const keyArr = Object.keys(result).sort()  
    console.log(keyArr)             //[ 'a', 'b', 'c', 'd', 'e' ]

    //2) key-sorted arr
    const sortKeys = new Array() 
    keyArr.forEach((key)=>{
        sortKeys[key] = result[key]
    })


    
    //
    console.log(sortKeys)  //[ a: 1, b: 2, c: 0, d: 2, e: -2 ]
    console.log(sortKeys[0])    //undefined
    console.log(typeof sortKeys)   //object
    console.log(sortKeys.length)     //0
    console.log(Array.isArray(sortKeys))    //true


    
    const valueArr = Object.keys(sortKeys).sort(function(a,b){
        return sortKeys[b]-sortKeys[a]
    })
    console.log(valueArr);    //[ 'c', 'b', 'd', 'a', 'e' ]

    //2) value-sorted arr
    const sortValues = new Array() 
    valueArr.forEach((key)=>{
        sortValues[key] = result[key]
    })
    console.log(sortValues)   //[ b: 2, d: 2, a: 1, c: 0, e: -2 ]
}

console.log(tallyPoints('abcde'))
console.log(tallyPoints('dbbaCEDbdAacCEAadcB'))
console.log(tallyPoints('dbbaCabddbEDbdAacccccccCEAadcB'))

