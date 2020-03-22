const number=10;

function add(){
    const n1=150,n2=100  // -> once the variable is declared inside the function, it not at all gonna affect the global variable
    n3=150   // ->variable created inside the function without var,let,const ->global variable(once the function is get executed)-> polluting the global scope
    return n1+n2+number
}

//console.log(n3)     //Reference Error
console.log(add());          //260
console.log(n1)             //ReferenceError: n1 is not defined , because n1 is declared as a variable inside the function
console.log(n3)    //150