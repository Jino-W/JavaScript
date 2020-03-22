function tallyPoints(b) {
    let r = { a: 0, b: 0, c: 0, d: 0 ,e:0}
    const a=b.split('')
    a.forEach(function (n) {
        if (r.hasOwnProperty(n)) {
            r[n]++
        } else {
            r[n.toLowerCase()]--
        }
    })
    console.log(r)    //{ a: 1, b: 2, c: 0, d: 2, e: -2 }
    
    const valueArr = Object.keys(r).sort(function(a,b){
        return r[b]-r[a]
    })
    console.log(valueArr)    //[ 'b', 'd', 'a', 'c', 'e' ]

    let res1 = []
    for (let key of valueArr) {
        let obj={}
        obj[key]=r[key]
        res1.push(obj)
    }
    console.log(res1[0])  //{ b: 2 }
    return res1        //[ { b: 2 }, { d: 2 }, { a: 1 }, { c: 0 }, { e: -2 } ]
}

var char='dbbaCEDbdAacCEAadcB'

console.log(tallyPoints(char))