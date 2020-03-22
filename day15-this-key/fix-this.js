/* variable declared outside the function by default it is a global variable => 
*/

const person = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        //return '${this.name} knows ${this.skills.join(', ')}
        this.skills.forEach(function(skill){        //here, 'this' is inside the method so that it is searching the skills property inside the local variable,and it found it
            console.log(`${this.name} knows ${skill}`);   // o/p: 'undefined knows js'  => (because,'this' is inside a function so it is looking for 'name' property inside the global object. so it returning 'undefined' )
        })
    }
}
person.getSkills();

/* o/p:
undefined knows js
undefined knows rb
undefined knows py
*/


//to fix the above program by creating the variable and refer it to 'this'  (1)

const person1 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        //console.log(`${this.name} knows ${this.skills.join(', ')}`)    //jino knows js, rb, py
        const that = this;
        this.skills.forEach(function(skill){
            console.log(`${that.name} knows ${skill}`); 
        })
    }
}
person1.getSkills();

/* o/p:
jino knows js
jino knows rb
jino knows py
*/
//to fix the above program by bound function  (2)
//function also have methods like bind()      (2a)
//bind({})
const person2 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`); 
        }.bind({name:'hari'}))        //value passed as a arg inside the bind method became the value of 'this' keyword
    }
}
person2.getSkills();

/*
hari knows js
hari knows rb
hari knows py
*/

//bind(this)        (2b)
const person3 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`); 
        }.bind(this))        //value passed as a 'arg' inside the bind method became the value of 'this' keyword
    }
}
person3.getSkills();

/*
jino knows js
jino knows rb
jino knows py
*/


//to fix the above program by avoiding forEach  (3)

const person4 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        for(i=0;i<this.skills.length;i++){
            console.log(`${this.name} knows ${this.skills[i]}`);
        }
    }
}
person4.getSkills();

/* o/p:
jino knows js
jino knows rb
jino knows py
*/

//to fix the above program by using es6 arrow function  (4)
//es6 arrow function  => 'this' keyword will use the same value of the 'this' keyword from outside the function

const person5 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :function(){           //inside the method 'this' refers to the current object
        return this;
    },
    getSkills : function(){
        this.skills.forEach((skill) => {      //es6 arrow function  => 'this' keyword will use the same value of the 'this' keyword from outside the function
            console.log(`${this.name} knows ${skill}`); 
        })        //value passed as a 'arg' inside the bind method became the value of 'this' keyword
    }
}
person5.getSkills();

/*
jino knows js
jino knows rb
jino knows py
*/


// don't use arrow for the method. use only to the function which is inside the method

const person6 = {
    name:'jino',
    skills:['js', 'rb', 'py'],
    valueThis :() => {  //es6 arrow function  => 'this' keyword will use the same value of the 'this' keyword from outside the function
        return this;
    },
    getSkills : function(){
        const that = this;
        this.skills.forEach((skill) => {      //es6 arrow function
            console.log(`${this.name} knows ${skill}`); 
        })        //value passed as a 'arg' inside the bind method became the value of 'this' keyword
    }
}
console.log(person6.valueThis());    //{}   so outside the function there is only an empty object


//-----------------method to fix the error created by 'this' keyword

/*
1.You can use bind() function.  ----> bound function
2.Store reference to context/this inside another variable(see below example). ---> const that = this; (or) const self = this;
3.Use ES6 Arrow functions. () =>
4.Alter code/function design/architecture - for this you should have command over design patterns in javascript.
*/



/*
context were javascript juns:
1.browser level  - 'this' refers to the 'Window'  for both inside and outside the function


//What are the 6 ways to use this keyword in Java ?
this can be used to get the current object.
this can be used to invoke current object's method.
this() can be used to invoke current class constructor.
this can be passed as a parameter to a method call.
this can be passed as a parameter to a constructor.
this can be used to return the current object from the method.
*/



