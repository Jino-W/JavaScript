//setting default parameter values in js function

//es5
function add(n1,n2){
    console.log('n1', n1, 'n2', n2);
    n1=(typeof n1=='undefined')? 0: n1;
    n2=(typeof n2=='undefined')? 0: n2;   // (or) n2 = n2 ? n2 : 0   (truthy falsy values)
    console.log('n1', n1, 'n2', n2);
    return n1+n2;  
}

console.log(add()); //no arg is passen n1,n2=undefined
/*
n1 undefined n2 undefined  //before variable assigning 
n1 0 n2 0
0
*/
console.log(add(10));           //n1=10, n2= undefined
/*
n1 10 n2 undefined
n1 10 n2 0
10
*/
console.log(add(undefined,10));        //n1=undefined, n2= 10
/*
n1 undefined n2 10
n1 0 n2 10
10
*/
console.log(add(10,20));           // n1=10,n2=20
/*
n1 10 n2 20
n1 10 n2 20
30
*/
console.log(add(10,20,30));   //n1=10, n2=20, 30 is ignored
/*
n1 10 n2 20
n1 10 n2 20
30
*/

//----------------------


//es6 feature

function sum(a=0,b=0){
    return a+b;
}
console.log(sum())   //0