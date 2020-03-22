/*
Constructor function - adv: Reusability of code
-> it is basically a blueprint of an object
-> we specify all the properties and methods that must be made available to those object
*/


function Person(name, city){
    this.name =name;        //instead of using 'this.name =name' if we mentioned 'name = name'   => p1.name = undefined.
    this.city =city;
    this.greet=function(){
        return `Hi there, i'm ${this.name}. I'm from ${this.city}`
    }
}

//object-1
const p1 = new Person('jino', 'chennai');
console.log(p1);  //Person { name: 'jino', city: 'chennai', greet: [Function] }
console.log(p1.name, p1.city);      //jino chennai
console.log(p1.greet());    //Hi there, i'm jino. I'm from chennai

//object-2
const p2 = new Person('minu', 'bangalore');
console.log(p2);   //Person { name: 'minu', city: 'bangalore', greet: [Function] }
console.log(p2.greet());   //Hi there, i'm minu. I'm from bangalore

//instanceof
console.log(p1 instanceof Object);           //true
console.log(p1 instanceof Array);          //false
console.log(p1 instanceof String);         //false
console.log(p1 instanceof Function);       //false

const arr = [];
console.log(arr instanceof Array);       // true
console.log(arr instanceof Object);     //true  -> arrays's datatype = Object
console.log(arr instanceof Number);     //false
console.log(p1 instanceof Function);     //false


/*
Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates.Other way to think about encapsulation is, it is a protective shield that prevents the data from being accessed by the code outside this shield.Encapsulation binds properties and methods together and hides their complexity from other cconstructor functions.
*/




