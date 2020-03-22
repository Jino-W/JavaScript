function quickSort(array){
    if(array.length <=1) return array
    let pivot = array.pop()
    let leftArr = []
    let rightArr=[]
    array.forEach(element => {
        if(element <= pivot)  leftArr.push(element)
        else rightArr.push(element)
    });
    console.log("Left: " ,leftArr, "Right: " ,rightArr)
    
    return [].concat(quickSort(leftArr), pivot, quickSort(rightArr))   // [ -1, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
}

console.log(quickSort([1,3,2,-1,5,8,,4,7,6,9]))

// o/p:
// Left:  [ 1, 3, 2, -1, 5, 8, 4, 7, 6 ] Right:  []
// Left:  [ 1, 3, 2, -1, 5, 4 ] Right:  [ 8, 7 ]
// Left:  [ 1, 3, 2, -1 ] Right:  [ 5 ]
// Left:  [] Right:  [ 1, 3, 2 ]
// Left:  [ 1 ] Right:  [ 3 ]
// Left:  [] Right:  [ 8 ]
// [ -1, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]