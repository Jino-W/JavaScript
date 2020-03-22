//boolean
const x = 5;
console.log(x);    //5
const y = 5;
const z = 6;
console.log((x == y) + '\n' + (x == z));  //true   false

//typeof
console.log(typeof true);   //'boolean'
console.log(typeof [1,2,3,4]); //'boolean'
console.log(typeof (x));   //'number'
console.log(typeof x);     //'number'
console.log(typeof function myFunc(){})   // 'function'

//:const w;       ->  //SyntaxError: Missing initializer in const declaration
let w;
console.log(typeof w);     //'undefined'

//undefined
const u=undefined;
console.log(u);            //:return   //undefined
console.log(typeof u);    //'undefined'

//null
const p=null;
console.log(p);           //null
console.log(typeof p);     //'object'

//undifined & null
console.log(typeof undefined);    //'undefined'
console.log(typeof null);         //'object'
console.log(undefined == null);    //true  ->  '==' only looking for value
console.log(undefined === null);   //false  ->  '===' looking for value and also the data type
//undefined and null is equal in value but not in datatype.