const n1='10';
const n2 =12.3;
const n3='19.7';


//1.number to string

//1
console.log(Number(n1));    //10
console.log(Number(n3));   //19.7
console.log(typeof Number(n1));  //'number'

//2
console.log(parseInt(n3));     //19

//3
console.log(parseFloat(n3));    // 19.7
console.log(parseFloat(10));   //10
console.log(Number.isNaN(3));    //false
console.log(Number.isNaN(NaN));  //true



//------------------------------------------------------------------------


//2.string to number

//1
console.log(String(n2));    //'12.3'
console.log(typeof String(n2));    //'string'

//2
console.log(''+10);    //'10'   ->string concatination


const source='bangalore', destination= 'mysore', distance=10;
console.log('the distance between '+source+' and '+ destination+' is '+distance +10+' kms' );     //the distance between bangalore and mysore is 1010 kms
console.log('the distance between '+source+' and '+ destination+' is '+(distance +10)+' kms'); //the distance between bangalore and mysore is 20 kms


/*
console.log('hello' +' world');      //'hello world'
console.log(10+5);   //15
console.log('15'+10);  //'1510'     ->string concatination
console.log(15+20+'30');   //'3530'  ->string concatination
console.log('10'+(20+30));  //'1050'   ->string concatination
console.log(10+'20'+30);  //'102030'   ->string concatination

console.log(Number('10')+20+30);   //60
*/

