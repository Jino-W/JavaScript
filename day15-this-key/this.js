console.log(this);          //{}   outside the function there is only the empty object

function showThis(){
    console.log(this);    //:inside the function 'this' refers to the global object    //:'console.log'  is also inside the global object
}
showThis();

const person = {
    name:'jino',
    valueThis :function(){           //:inside the method 'this' refers to the current object
        return this;
    }
}
console.log(person.valueThis());          //{ name: 'jino', valueThis: [Function: valueThis] }


//bind()
function showThis1(){
    console.log(this);    //:inside the function 'this' refers to the global object    //
}

showThis1.bind({n:10})()           //{ n: 10 }


//this 

const obj = {
    value: 'hi',
    print: function() {
        console.log(this)

        function innerFunc() {
            console.log(this)
        }
        innerFunc.bind(this)()
    }
}
obj.print()

/*
{ value: 'hi', print: [Function: print] }
{ value: 'hi', print: [Function: print] }
*/