//variables -> object

const name = 'jino', city = 'chennai'       //variables

//es5
const person = {
    name : name,
    city: city,
    details: function(){
        return this.name
    }
}

console.log(person)
console.log(person.details())

/*
{ name: 'jino', city: 'chennai', details: [Function: details] }
jino
*/


//---------------------------------------------------------------------------



//es6
const object = {
    //short hand properties (object), if property and variable name are same
    name,
    city,
    details(){
        return this.name
    }
}

console.log(object)
console.log(object.details())
/*
{ name: 'jino', city: 'chennai', details: [Function: details] }
jino
*/