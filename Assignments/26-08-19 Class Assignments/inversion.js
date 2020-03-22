//inversion
function numInversions(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j<array.length;j++){
            if(array[j] > array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1]= temp;
                count +=1
            }
        }
    }
    console.log(array)
    return count;
}


console.log(numInversions([])); // 0
console.log(numInversions([5])); // 0
console.log(numInversions([1,2])); // 0
console.log(numInversions([2,1])); // 1
console.log(numInversions([1,2,3])); // 0
console.log(numInversions([1,3,2])); // 1
console.log(numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2])); // 22

/*

numInversions([3,1,2]); // 2

numInversions([3,2,1]); // 3

numInversions([5,3,4,1,2]); // 8

numInversions([1,1,1,1]); // 0

numInversions([2,2,1,1]); // 4

numInversions([3,3,3,2,2,1]); // 11

*/