//in-built higher order functions

// 1.filter()
//c style
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24}
];
const fullAge = [];
for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >= 18) {
      fullAge.push(persons[i]);
    }
}
console.log(fullAge);

//js style ----------
const fullAge1 = persons.filter(person => person.age >= 18);
console.log(fullAge1);

/* o/p:
[ { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Tony', age: 24 } ]
 */

//-------------------------------------------------------------------------------------


// 2.map()
//c style
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);  // [ 2, 4, 6 ]


//js style ---------
const arr_1 = [1, 2, 3];
const arr_2 = arr_1.map(function(item) {
  return item * 2;
});
console.log(arr_2);    //[ 2, 4, 6 ]


//----------------------------------------------------------------------------

// 3.reduce()
//c style
const Arr = [5, 7, 1, 8, 4];
let Sum = 0;
for(let j = 0; j < Arr.length; j++) {
  Sum = Sum + Arr[j];
}
console.log(Sum);    // 25


//js style
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);  //25

//:We can also provide an initial value
const array = [5, 7, 1, 8, 4];
const sum1 = array.reduce(function(sumTotal, currentValue) {
    return sumTotal + currentValue;
}, 10);        //:here 10 is the initial value
console.log(sum1);     // 35

/*const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(sumTotal, currentValue,currentIndex,array) {
    console.log(currentIndex,array);
    return sumTotal + currentValue;
}, 10);

console.log(sum);     // 35
*/




//-------------------------------------------------------------------------
//-------------------------------------------------------------------------



//Creating Our own Higher-Order Function

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn){
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(
      fn(arr[i])
    );
  }
  console.log(newArray);    //[ 10, 6, 3, 4, 1 ]
  return newArray;
}

const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
console.log(lenArray);       // [ 10, 6, 3, 4, 1 ]

/*
In the above example, we created an 'Higher-order function mapForEach', which accepts an 'array and a callback function fn'. This function loops over the provided array and calls the callback function fn inside the newArray.push function call on each iteration.
The callback function fn receives the current element of array and returns the length of that element, which is stored inside the newArray. After the for loop has finished, the newArray is returned and assigned to the lenArray.
*/





