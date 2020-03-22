//1) independent array
const fruits = [ 'apple', 'mango', 'chickoo']
console.log(...fruits) //apple mango chickoo


//copying array elements into another array -> (concat, splice)(es5), spread(es6)
const arr = [...fruits]      //[ 'apple', 'mango', 'chickoo']
const arr1 = [].concat(fruits)
const arr2 = fruits.splice(0)
arr.push('jino')


console.log(arr)   //[ 'apple', 'mango', 'chickoo', 'jino' ]
console.log(arr1) //[ 'apple', 'mango', 'chickoo']
console.log(arr2)  //[ 'apple', 'mango', 'chickoo']



//2) independent object
const object = {
    fName : 'jino',
    lName : 'esther',
    age : 23
}

const obj = Object.assign({}, object)
const obj1 = {...object}  //{ fName: 'jino', lName: 'esther', age: 23 }
console.log(obj1)
obj1.city ='chennai'

console.log(obj1)    //{ fName: 'jino', lName: 'esther', age: 23, city: 'chennai' }
console.log(obj)     //{ fName: 'jino', lName: 'esther', age: 23 }