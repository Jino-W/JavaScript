function findNotRepeated(array){
    const obj = {};
    for (i = 0; i < array.length; i++){
        if (obj[array[i]]) {
            obj[array[i]] +=1
        } else {
            obj[array[i]] = 1
        }
    }
    console.log(obj)
    for (const key in obj) {
        if (obj[key] == 1) {
            return Number(key)
        }
    }
}

console.log(findNotRepeated([1, 1, 2, 2, 3, 4, 4, 5, 5]))