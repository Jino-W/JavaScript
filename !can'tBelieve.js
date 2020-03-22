//know more:

//typeof
console.log(typeof []);   //'object'
console.log(Array.isArray([]));   //true
console.log(typeof null);  //'object'
console.log(typeof NaN); //"number"
console.log(typeof undefined); //"undefined"

console.log(undefined + undefined) = NaN
console.log(null + undefined) = NaN
console.log(null + null) = 0
console.log(null + "5") = "null5"
console.log(null + 6 + "5") = "65"




//
console.log(2 + true);        //3   => true = 1
console.log(2 + false);      //2   => false = 0 

console.log('10'+20);    //1020

//unary operator
console.log(-'50'+20);   //-30   => '-' is a unary operator that converts string to number
console.log(+'50'+20);   //70
console.log(+'dude');  //NaN 

//
let x=20/'5';
console.log(x);              //4

console.log(20/'jino');     //NaN

let y=20*'5'      
console.log(y);         //100

console.log(20 * 'jino')          //NaN


console.log(true && 1)  //1
console.log(false && 1) //false
console.log(!true && 1) //false
//
var a =(1,2,3);
console.log(a);   //3  => comma operator evaluates each of its operands (from L->R) & returns the last value.
var b=(1, 5-1) * 2;   //8     <= (2, 8)  <=  (1, 4) *2
console.log(b);

//truthy falsy
console.log(!'bang'); //false

/*

//falsy values:
 false, 0, undefined, NaN, '', null

//truthy values:
 !false, true, -1, 1, [], [2,4], {}, {name:'jino'}, dct academy', new Date(), 3.14
 -> truthiness is not the same as == true

 */


//prefix , postfix
let inc = 7;
console.log(inc++);  //7
let dec = 7;
console.log(dec--);   //7
let inc1 = 7;
console.log(++inc1);  //8
let dec1 = 7
console.log(--dec1);  //6

//string concat
console.log('jino'+' W')     // 'jino W'
console.log(('jino').concat(' minu'));  //  'jino minu'


console.log("1.This is a string\nthat spans across\nthree lines.");

console.log("2.This is a string\n" +"that spans across\n" +"three lines.");
console.log("3.This is a string\n\
that spans across\n\
three lines.");
console.log(`4.This \` is a \\ string
that spans across
three lines.`);   //: "\" -> escape character

/*
1.This is a string
that spans across
three lines.
2.This is a string
that spans across
three lines.
3.This is a string
that spans across
three lines.
4.This is a string
that spans across
three lines.
*/

console.log("5.This is a string\rthat spans across three lines.");  //'that spans across three lines.'



// Initializing a new string primitive ->   JavaScript will perform a conversion to object and back to primitive every time a method or property is called
const stringPrimitive = "A new string.";
console.log(typeof stringPrimitive);   //'string'

// Initializing a new String object
const stringObject = new String("A new string."); 
console.log(typeof stringObject);  //'object'


//charAt()
console.log('hi, jino'[4]);         //j
console.log('hi, jino'.charAt(5));    //i


console.log("How are you?".toUpperCase());        //'HOW ARE YOU?'
console.log("     How are you?     ".trim());       //'How are you?'   <-  removes white space from both ends of a string
console.log("     How are you?     ".replace("How", "Where").trim());  //'Where are you?'
const originalString = "Javascript is a programming language. I'm learning javascript."

// Search string for "javascript" and replace with "JavaScript"
const newString = originalString.replace(/javascript/gi, "JavaScript");     //g-(global-flag to catch all instances of a value), i-(ignore case sensitive)
console.log(newString);  //JavaScript is a programming language. I'm learning JavaScript.



//boolean
let myBool = 5 > 8; 
console.log(myBool);     // false



//----------------------------- (array) -----------------------------------------


//entries()
// access the index value in 'for-of' looping statement(string, array)
let sharks = [ "great white", "tiger", "hammerhead" ];
for (let [index, shark] of sharks.entries()) {
    console.log(index, shark);
}

/*
0 'great white'
1 'tiger'
2 'hammerhead'
*/



//'forEach' statement (array)
var fruits = ['Apple', 'Banana','mango'];

fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

/*
Apple 0
Banana 1
mango 2
*/


//every()
const element =[12, 5, 8, 130, 44]

const b1=element.every(function(elt){
  return elt >= 10; 
});   
console.log(b1);           // false

const b2=element.every(function(elt){
  return elt >= 1; 
});
console.log(b2);           //true

//some()
const some1=element.some(function(elt){
    return elt >= 100; 
});
console.log(some1);        //true


//sort()
const inventors = [
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
];

//sort()
//assending order
let sortByBirthday = inventors.sort((a, b) => a.year - b.year);
console.log(sortByBirthday);
/*
[ { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 } ]
*/

//descending order
let sortByBirthday1 = inventors.sort(function(a, b){
    return b.year - a.year;
});
console.log(sortByBirthday1);

/*
[ { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 } ]
*/


/*    reduce()
syntax:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

//1.
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  console.log(index, total, amount, array);
  /*
  1 29.76 41.85 [ 29.76, 41.85, 46.5 ]
  2 71.61 46.5 [ 29.76, 41.85, 46.5 ]
  */
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

console.log(average);     //39.37

//2.
var euros1 = [29.76, 41.85, 46.5]; 

var sum = euros1.reduce( function(total, amount){
  return total + amount
});

console.log(sum);    //118.11


//findIndex()- find the index of a particular item
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const index = comments.findIndex(function(c){
  return c.id < 200000;
})

console.log(index);     //3


//toFixed()   -> fixing no. of decimal places
var num = 5.56789;
var n = num.toFixed(2);
console.log(n);          //5.57
console.log(num.toPrecision(1));     //6
console.log(num.toPrecision(3));    //5.57








