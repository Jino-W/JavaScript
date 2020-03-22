//es5-constructor function


//function declaration get hoisted
const p2 = new Person('jino','esther')
console.log(p2.details())     //jino esther


function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
    this.details = function(){
        return this.firstName + ' ' + this.lastName
    }
} 

const p1 = new Person('jino','esther')
console.log(p1.details())     //jino esther