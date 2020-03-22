//function-expressions doesn't get hoisted
//function expression -> function is assigned as the value to the variable
//we can pass the function as a argument to another function

//console.log(hello('jino'));    //TypeError: hello is not a function  ->it is the function expression which doesn't get hoisted
console.log(hello)    //undefined  -> hello variable can get hoisted 

var hello = function(name){
    return 'hello there ' + name;    
}

console.log(hello('jino'));      // 'hello there jino'