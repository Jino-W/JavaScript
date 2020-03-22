function duplicate(array){
    let result = []
    for(let i=0;i<array.length;i++){
        let element = array[i]
        if(array.indexOf(element) !== array.lastIndexOf(element) && result.indexOf(element)<0){
            result.push(element)
        }
    }
    return result
}

console.log(duplicate([10,20,30,10,40,75,28,50,40]))   //[ 10, 40 ]