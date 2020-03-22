//min
function min(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array[0];
}

console.log(min([5, 1, 4, 7, 1, 2]));  //1
console.log(min([-1, 6, 3, 2.2, -10, -4]));   //10


function min(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array[0];
}