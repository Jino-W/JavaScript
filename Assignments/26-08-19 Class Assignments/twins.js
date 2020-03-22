//twins
function findTwins(array) {
    for (let i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            if (array[i] == array[j]) {
                return array[i];
            }
        }
    }
    return null;
}

console.log(findTwins([4,1,6,1,5]));  //1
console.log(findTwins([2,3,6,34,7,8,2]));   //2
console.log(findTwins([3,1,4,2,5]));  //null
console.log(findTwins([3,6,9,2,4,3,1,0]));  //3
console.log(findTwins([])); // null
