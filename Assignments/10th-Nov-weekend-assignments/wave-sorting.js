function WaveSorting(array){
    for (i = 1; i < array.length-1; ){
        console.log(array[i - 1], array[i] ,array[i + 1])
        if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
            console.log("yes")
            i+=2
        } else {
            console.log("no")
           return false
        }  
    }
    return true
}

console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1]))
console.log(WaveSorting([39, 20, 22, 4, 14, 4, 6]))


// 0 1 2
// no
// false

// 39 20 22
// yes
// 22 4 14
// yes
// 14 4 6
// yes
// true
