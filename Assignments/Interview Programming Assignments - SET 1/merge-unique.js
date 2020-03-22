// function mergeArray(arr1,arr2){
//     // return [...new Set(arr1.concat(arr2))]
//     const merged = [...arr1, ...arr2]
//     const copy = [...merged]
//     const result = []
//     for (let i = 0; i < copy.length; i++){
//         for (j = i + 1; j < merged.length; j++){
//             if (copy.indexOf(copy[i]) !== merged.lastIndexOf(merged[j]) && result.indexOf(copy[i])==-1) {
//                 result.push(copy[i])
//             }
//         }
//     }
//     return result
// }

function mergeArray(arr1, arr2) {
    if([...arr1,...arr2].length==0) return "empty array"
    const result =[]
    for (i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])) result.push(arr1[i])
    }
    return [...result, ...arr2]
}


console.log(mergeArray([1, 2, 3], [2, 30, 1]) )                 //[3, 2, 30, 1]