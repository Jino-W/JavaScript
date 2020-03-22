const person={
    name: 'ravi',
    age: 25,
    greet: function(){                          //function which assigned to the property of the object is called as Method() 
        return 'Hi,my name is ' +this.name
    },
    sayHello:  function(arg){
        // return 'Hi '+ arg +', my name is ' +this.name
        return `Hi, ${arg}, my name is ${this.name}`         //'this' keyword => es6 feature
    }
}

console.log(person.greet());          //'Hi,my name is ravi'
console.log(person.sayHello('ani'));     //'Hi ani,my name is ravi'


/*

es6 feature : template string / template literals / string literals     =>  used in string concatination
``  => backtick  (string has to be written inside the backtick)
${javascript expression}
${variable}  => variables should be declared inside the flower brackets with the start of $-sign

*/

/*--------------------------------------------------------
//today's class discussion is about

object is a js non-primitive data type which contain properties and also methods
method? =>An object method is an object property containing a function definition.
function : 
'this' key word(es6 feature)  -> instead of using object name we can use 'this' keyword to access the properties of the object, (inside the object)
refers to the current object
backtick -> in string concatination
*/