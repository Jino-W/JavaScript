//es5
//1. var: drawback:declaring the variable is not the constant one.
var city ='bangalore';   
console.log(city);    //'bangalore'
city = 'mangalore';
console.log(city);      //'mangalore'
var city = 'tamilnadu';
console.log(city);       //'tamilnadu'




//-----------------------------------------------------------------------------------------------


//es6
//"2 ways of declaring the variable"

//1. let: redefining is possible.but, re-declaration is not possible.
let city1 ='basavanagudi';
console.log(city1);        //'basavanagudi'
city1 = 'jeyanagar';
console.log(city1);       //'jeyanager'
//let city = 'tamilnadu';    //SyntaxError: Identifier 'city' has already been declared


//2. const: redefining & re-declaration both are not possible.
const vowel='aeiou';        //'aeiou'
console.log(vowel);
vowels ='abcd';              //'aeiou'
console.log(vowel);
//const vowel ='jiio'  //SyntaxError: Identifier 'vowel' has already been declared
