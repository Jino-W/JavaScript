// passing the argument

let n1=10, n2=20;
function add(a1,a2){  //parameters are local variable to the particular function scope
    a1=100,a2=200;
    return a1+a2;
}

console.log(n1, n2);      //10, 20
console.log(add(n1,n2));    //300
console.log(n1, n2)    //10, 20



// passing the argument

let x=10, y=20;
function add2(x,y){   //parameter(local variable) passing is like declaring the variable like 'let x,y'
    x=100,y=200;
    return x+y;
}

console.log(x, y);      //10, 20
console.log(add2(x,y));    //300
console.log(x, y)    //10, 20   //so no change in parent variable