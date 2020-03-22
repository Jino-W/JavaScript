//es5 
var sayHi = function(){

}

//es6  => arrow function are used for function expression and call back functions(forEach, find, filter)
//1. function expression
const sum = (n1=0,n2=0) =>{
    return n1+n2;
}

console.log(sum(10,20));

//2. call back functions
// es5   
const numbers =[10,15,20,25,30,40];
var evens5 = number.filter(function(n){
    return n%2 == 0;
})


//es6

const evens6 = number.filter((n)=>{
    return n%2 ==0
})
//or
const evens66 = number.filter((n)=> n%2 ==0 )

console.log(evens66)

//3.'this' keyword
//es6 -> inside the arrow function, the 'this' keyword doesn't have the value of it's own, but it refers to the value of 'this' outside the function.
//* ouside the function 'this'={}
console.log(this);   //{}

//es5
//*inside the function 'this' = global object
var showThis =function(){
    console.log(this);    // global object
}

showThis();

//es6
//* inside arrow function 'this' = value of this outside the arrow function
//a)
const showMeThis = () => {
    console.log(this);               //{}
}

showMeThis();

//b)

function alterThis(){
    // 'this' = global object
    const arrow = ()=>{
        console.log(this); //inside arrow function 'this' = value of this outside the arrow function
    }
    arrow();
}


function alterThis1(){
    // 'this' = {name:'jino'}
    const arrow1 = ()=>{
        console.log(this); //inside arrow function 'this' = value of this outside the arrow function
    }
    arrow1();
}

alterThis.bind({name:'jino'})()

