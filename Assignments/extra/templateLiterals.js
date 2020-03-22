var name = 'Brandon';
var age = 26;
function greet(arr, nameArg, ageArg) {
    console.log("arr:", arr, "nameArg:", nameArg, "ageArg:", ageArg);   //arr: [ 'Woah, ', ' is ', '?' ] nameArg: Brandon ageArg: 26
    console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);   // "Woah, Brandon is 26?"
}
greet`Woah, ${name} is ${age}?`;








//Object destructuring

// > b.add = "add"
// 'add'
// > console.log(b)
// { name: 'jino', age: 29, add: 'add' }
// undefined

// > let {name, ...c} = b
// undefined
// > console.log(c)
// { age: 29, add: 'add' }
// undefined
// > console.log(name)
// jino
// undefined