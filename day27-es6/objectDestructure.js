// object -> variable

const person = {
    name: 'jino',
    city: 'chennai',
    details: function(){
        return this.name
    }
}

//es5
const Name =person.name
const City =person.city
const State =person.state
const Detail = person.details()
console.log(Name,City,State,Detail) //jino chennai undefined jino

//es6
const {name, city, state, details} = person       //destructuring object
console.log(name, city, state, details.bind(person)())   //jino chennai undefined jino