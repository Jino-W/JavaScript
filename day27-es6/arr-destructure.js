const fruits = ['apple', 'mango', 'grapes', 'banana']

//es5
const f0 = fruits[0]
const f1 = fruits[1]
console.log(f1)    //'mango'

//es6
const [a0,a1] = fruits         //array destructuring - extract array values and put it in variables
console.log(a0)  //'apple'

const [,,b2] = fruits
console.log(b2)     //'grapes