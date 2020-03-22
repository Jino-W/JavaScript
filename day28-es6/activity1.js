//passing object to the constructor function & class
//es5
function Person(obj){
    this.firstName = obj.firstName
    this.lastName = obj.lastName
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.greet = function(name){
        return `hi, ${name}`
    }
}
const p1 = new Person({firstName : 'rahul', lastName: 'dravid'})     //arg = object
console.log(p1.firstName)
console.log(p1.lastName)
console.log(p1.greet('jino'))
console.log(p1.fullName())


//es6
class Person1 {
       constructor(obj){
        this.firstName = obj.firstName
        this.lastName = obj.lastName
       }
       greet(name){
        return `hi, ${name}`
       }
       fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const p2 = new Person1({firstName : 'rahul', lastName: 'dravid'})
console.log(p2.firstName)
console.log(p2.lastName)
console.log(p2.greet('jino'))
console.log(p2.fullName())

/*
rahul
dravid
hi, jino
rahul dravid
*/

