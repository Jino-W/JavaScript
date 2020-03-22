//passing array as an argument to the constructor function & class

//es5

function Student(arr){
    this.name = arr[0]
    this.city = arr[1]
    this.age = arr[2]
    this.details = function (){
        //return arr.join('-')
        return `${this.name}-${this.city}-${this.age}`
    }
}

const S1 = new Student(['jino','chennai',23])
console.log(S1.name)
console.log(S1.city)
console.log(S1.age)
console.log(S1.details())


class Student1{
    constructor(arr){
        this.name = arr[0]
        this.city = arr[1]
        this.age = arr[2]
    }
    details(){
        //return arr.join('-')
        return `${this.name}-${this.city}-${this.age}`
    }
}

const S = new Student(['jino','chennai',23])
console.log(S.name)
console.log(S.city)
console.log(S.age)
console.log(S.details())

/*
jino
chennai
23
jino-chennai-23
*/