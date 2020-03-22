//function: reusability of code

//1.function declaration
function greet(name){
    console.log('i am inside the function');      //'i am inside the function'
}

// function invocation || function call 
console.log(greet());  //undefined         ->no returning of value from the function
greet();       


function greetRet(name){
    console.log('i am inside the function');     //'i am inside the function'
    return `hi, ${name}`       //-> returning the value from a function
}

console.log(greetRet('jino'));  // 'hi, jino'


//further processing on the output
const output = greetRet('jino');  //:if want to perform further operation on the returned value assign it to a variable.


if(output.length>0){
    console.log(output.toUpperCase());        //HI, JINO
}else{
    console.log(output.toLowerCase());
}
