function DupliCount(string){
    let str = string.split(" ").join('')
    const obj = {}
    const result =[]
    const duplicate = []
    for(let i=0;i<str.length;i++){
        if(obj[str[i]])  {
            obj[str[i]]+=1
            duplicate.indexOf(str[i]) < 0 && duplicate.push(str[i])
        }
        else obj[str[i]]=1
    }
    for(const key in obj){
        result.push(`count[${key}] = ${obj[key]}`)
    }
    return result
    // return `duplicate: ${duplicate}, count: ${JSON.stringify(obj)}`   //duplicate: a,b,c,s, count: {"a":3,"b":2,"c":3,"n":1,"s":2,"j":1,"i":1,"r":1}
}


console.log(DupliCount('aaa bb ccc n ss j i r'))