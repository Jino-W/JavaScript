var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}

var personCity = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName:"John",
    lastName: "Doe"
}

var person2 = {
    firstName:"Mary",
    lastName: "Doe"
}

  
//call()       -> call method takes arguments separately.
console.log(person.fullName.call(person1));  //set value for 'this'.
console.log(personCity.fullName.call(person1, "Oslo", "Norway"));  //set value for 'this' and passing arguments to the function.


//apply()      -> apply method takes arguments as an array.
person.fullName.apply(person1); 
person.fullName.apply(person1, ["Oslo", "Norway"]);
