const name =['dhoni','virat','sachin', 'rahul']

//1.Mutable methods
//reverse()
const rev =name.reverse()
console.log(rev);

//sort()
const sorting =rev.sort();


//console.log(sortting);
//-----------------------------------------------------

//immutable methods
//slice()

//indexOf()

//concat()


//---------------(My work)-------------------

const fruits =['mango','apple','cherry'];
console.log(fruits);
console.log(fruits.length);

//reverse()
console.log(fruits.reverse());       //mutable
console.log(fruits);

//sort()
console.log(fruits.sort());
console.log(fruits);             //mutable

const fruits1 =['mango','apple','mango','cherry'];
//lastIndexOf()
console.log(fruits1.lastIndexOf('mango'));    //2

//toString()
console.log(fruits1.toString());   //'mango,apple,mango,cherry'

//join()
console.log(fruits1.join(','));  //mango,apple,mango,cherry
console.log(fruits1.join(''));  //mangoapplemangocherry
console.log(fruits1.join('-')); //mango-apple-mango-cherry

//filter()
const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function check() {
    
}

console.log(ages.filter(checkAdult));  //[32, 33, 40]
console.log(ages.filter(check));        //[]



//find()
const numbers = [10, 20, 30, 40, 50];

function findNum(numbers, n){
    const result=numbers.find(function(number){
        return number>n;
    })
    return result;
}

console.log(findNum(numbers, 25));
console.log(findNum(numbers, 55));


//es6

/*
var ages1 = [3, 10, 20, 18];

function checkAdult1(age1) {
  return age1 >= 18;
}
console.log(ages1.find(checkAdult1));  //20



var ages11 = [3, 10, 5];    

function checkAdult11(age11) {
  return age11 >= 18;
}
console.log(ages11.find(checkAdult11));  //undefined




function check1() {
}
console.log(ages1.find(check1)); //undefined

//slice()
console.log(fruits1.slice(1));     //[ 'apple', 'mango', 'cherry' ]
*/


