function tallyPoints(str){

    let result = new Array()   
    for(const char of str){
        sChar = char.toLowerCase()
        if (result[sChar] != undefined) {
            char == char.toUpperCase() ? result[sChar]-- : result[sChar]++
        } else {
            char == char.toUpperCase() ? result[sChar]= -1 : result[sChar] = 1
        }
    }
    console.log(result); //[ d: 6, b: 6, a: 1, c: 6, e: -2 ]

    let newarr=[]
    Object.keys(result).sort().forEach(function(key) {        
        const obj={}
        obj[key] = result[key]
        newarr.push(obj)
    });

    console.log(newarr) //[ { a: 1 }, { b: 6 }, { c: 6 }, { d: 6 }, { e: -2 } ]

    newarr = newarr.sort((a,b) => {
        return Object.values(b)[0] - Object.values(a)[0]   //([1] - [6]) => 1-6 
    })

    return newarr
}

//console.log(tallyPoints('abcde'))
//console.log(tallyPoints('dbbaCEDbdAacCEAadcB'))
//console.log(tallyPoints('dbbaCabddbEDbdAacccccccCEAadcB'))
//console.log(tallyPoints('abcde'))

console.log(tallyPoints('dbbaCEDbdAacCEAadcBcbbbbccdddDDcccddd'))