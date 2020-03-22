function missing(a){
    let result = []
    for(let i=0;i<a.length;i++){
        if(a[i+1]-a[i] != 1){
            result.push(a[i])
            let n=a[i+1]-a[i]-1
            for(let j=1;j<=n;j++){
                result.push(a[i]+j)
            }
        }else{
            result.push(a[i])
        }
    }
    return result
}


console.log(missing([1,2,5,6,7,8]))