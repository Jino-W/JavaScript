//es6
//constructor is used to assign initial values to our properties
//class is nothing but the syntactical change of contsructor function

class Person {
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }
    details(){
        return this.firstName + ' ' + this.lastName
    }
} 

const p1 = new Person('jino','esther')
console.log(p1.details())     //jino esther