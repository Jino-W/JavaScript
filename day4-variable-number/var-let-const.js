//keyword-

//1:variable declared with var keyword get hoisted


//:var city;                    //:during hoisting only the variable declared is moved to the top, not the value.
console.log(city);
var city ='bangalore';
console.log(city);

//console.log(city1);          //ReferenceError: city1 is not defined
let city1 ='chennai';       //:let- no hoisting
console.log(city1);

//console.log(city2);             //ReferenceError: city1 is not defined
const city2='mysore';        //const- no hoisting
console.log(city2); 


//2:variable declared with 'var' keyword is function scoped

function changeUser(bool){
    console.log('before if condition, ', user);             //:variable declaration get hoisted
    if(bool){
        console.log('inside the if condition, ', user);          //:hoisting takes place
        var user= 'jino';                                                      //:let user='jino' -> //ReferenceError: user is not defined
        console.log('inside the if condition and after declaration, ',user);
    }
    console.log('outside the if condition and after declaration, ', user);
    console.log(user);
}
console.log(changeUser(true));

/*
//2:variable declared with 'let & const' keyword is block scoped 

function changeUser(bool){
    console.log('before if condition, ', user);             //:no hoisting
    if(bool){
        console.log('inside the if condition, ', user);       //:no hoisting
        let user= 'jino';                                                      //:let user='jino' -> //ReferenceError: user is not defined
        console.log('inside the if condition and after declaration, ',user);
    }
    console.log('outside the if condition and after declaration, ', user);         //:let- variable is not available outside the declared block
}
console.log(changeUser(true)); 
*/     