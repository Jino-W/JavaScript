//case 1
//let  a=10, b =20;          // reassignment is no possible if it declared as 'const'
function add2(){
    a =100, b=200         // -> reassigning of a, b is happining here.
    return a + b;     //if the varible declaration is not present inside or even outside the function -> ReferenceError: a is not defined
}

console.log(a, b);      //10, 20
console.log(add2());    //300
console.log(a,b)        //100, 200   -> so, change in variable


//case 2 
let  a1=10, b1 =20;    
function add2(){
    let a1 =100, b1=200         // -> redeclaration happened here    (variable shadowing)
    return a1 + b1;     //Refference error ->if no variable in function scope and global scope
}

console.log(a1, b1);      //10, 20
console.log(add2());    //300
console.log(a1, b1)        //10, 20  -> so,no change in variable