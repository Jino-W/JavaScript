//function can accept variable no. of arguments
//all the arguments passed to the function is kept inside the object

function add(){
    console.log(arguments);          //{ '0': 10, '1': 20, '2': 30 }  
    console.log(arguments[0])        //10
    console.log(arguments[2])        //30
    console.log(arguments.length);   //3
    console.log(arguments.callee);    //[Function: add]
    //console.log(arguments.caller);    //undefined
    //console.log(arguments[@@iterator]);

    // convert arguments into array
    console.log(Array.from(arguments));      // [ 10, 20, 30 ]
    console.log(...arguments);   // 10 20 30
    console.log([...arguments]);     // [ 10, 20, 30 ]
}


add(10,20,30);    //[Arguments] { '0': 10, '1': 20, '2': 30 }

//add(10);   //[Arguments] { '0': 10 }         //each argument is available to us via index (or) key (or) property
//add(10, 20);    //[Arguments] { '0': 10, '1': 20 }

/*
arguments.callee   : Reference to the currently executing function that the arguments belong to.
arguments.caller   : Reference to the function that invoked the currently executing function.
arguments.length   : The number of arguments that were passed to the function.
arguments[@@iterator]  : Returns a new Array iterator object that contains the values for each index in the arguments.
*/


//javascript is untyped language
var n=5;
n='jino';
console.log(n);   //'jino'

let m =2;
m='hari';
console.log(m)    //'hari'
