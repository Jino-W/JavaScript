//function invoke || function call

function greet(){
    console.log('welcome');
}

greet();  //-> function call to invoke the function




//'iife' -> immediately invoked function expression


//note: when using 'iife' -> use ';'-> terminating the statement to the before statement

console.log((function(){
    return 'hi jino'
})());

//(or)

(function(){
    console.log('hi');
})();

//(or)

(function(){
    console.log('jino');
}())