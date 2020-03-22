/*
function findDuplicate(array) {
    if (array.length == 0) {
        return 'empty array'
    } else {
    const obj = {};
    const result = [];
    array.forEach(function(arr){
        if(obj[arr]){
            obj[arr]++;
        }else{
            obj[arr]=1;
        }
    })
    console.log(obj);
    for (const key in obj) {
        if (obj[key] > 1) {
            result.push(key);
        }
    }
    return result;
    }
}

console.log(findDuplicate([10,20,30,40,10,40]));
console.log(findDuplicate([10,20,30,40]));
console.log(findDuplicate([]));
console.log(findDuplicate(['a','b','a','c',1,1]));

/*
{ '10': 2, '20': 1, '30': 1, '40': 2 }
[ '10', '40' ]
{ '10': 1, '20': 1, '30': 1, '40': 1 }
[]
empty array
{ '1': 2, a: 2, b: 1, c: 1 }
[ '1', 'a' ]
*/

//--------------------------------------
/*

function findDup(array){
    const newArr = array.slice(0).sort();
    console.log(newArr);
    const result =[];
    for(let i=0;i<newArr.length;i++){
        if(newArr[i]==newArr[i+1]){
            result.push(newArr[i]);
        }
    }
    return result;  
}
console.log(findDup([10,20,30,40,10,40]));
console.log(findDup([10,20,30,40]));
console.log(findDup([]));
console.log(findDup(['a','b','a','c',1,1]));

/*
[ 10, 10, 20, 30, 40, 40 ]
[ 10, 40 ]
[ 10, 20, 30, 40 ]
[]
[]
[]
[ 1, 1, 'a', 'a', 'b', 'c' ]
[ 1, 'a' ]
*/


function find(array){
    const result = [];
    for(let j=0; j<array.length; j++){
        for(let i=j+1; i<array.length; i++){
            if((array[j] === array[i]) && !(result.includes(array[i]))){
                 result.push(array[i])
            }
        }
    }
    return result
}

console.log(find([10,20,30,40,10,40,10]));
console.log(find([10,20,30,40]));
console.log(find([]));
console.log(find(['a','b','a','c',1,1]));