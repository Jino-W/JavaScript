var n = 100;
var name = 'jino';
var success = true;
var birds = ['parrot', 'crow', 'hen'];
var size = [10, 50, 80, 100];
var kingdom = {plant:'mango',animal:'cow'};
var password = 'jimi2020';
var definition = function(){
    return 'u r cute';
} 

console.log(typeof n);                //number
console.log(typeof name);             //string
console.log(typeof success);          //boolean
console.log(typeof birds);            //object
console.log(typeof size);             //object
console.log(typeof kingdom);          //object
console.log(typeof password);         //string
console.log(typeof definition);       //function

console.log(n);                  //100
console.log(name);               //jino
console.log(success);            //true
console.log(birds);              //[ 'parrot', 'crow', 'hen' ]
console.log(size);               //[ 10, 50, 80, 100 ]
console.log(kingdom);            //{ plant:'mango',animal:'cow' }
console.log(password);           //jimi2020
console.log(definition);         //[Function: definition]