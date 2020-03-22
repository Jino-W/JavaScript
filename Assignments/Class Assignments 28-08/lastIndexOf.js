//lastIndexOf()
function lastIndexOf(array, n) {
    for (i = array.length - 1; i >= 0; i--){
        if (array[i] === n) {
            return i;
        }
    }
    return -1;
}

console.log(lastIndexOf([1, 2, 3, 4], 2));
console.log(lastIndexOf([1, 2, 3, 4, 2], 2));
console.log(lastIndexOf([1, 2, 3, 4], 22));

//---------------------------

function lastIndexOf1(array, n) {
    array.lastIndexOf(n);
}

console.log(lastIndexOf1([1, 2, 3, 4], 2));
console.log(lastIndexOf1([1, 2, 3, 4, 2], 2));
console.log(lastIndexOf1([1, 2, 3, 4], 22));

//---------------------------

