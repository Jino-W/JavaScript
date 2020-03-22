/*1)Primitive data type*/

/*1.number*/

var n=100,m=95.5,pass='100';
console.log(typeof n);        //number
console.log(typeof m);        //number
console.log(typeof pass);     //string

/*-----------------------------------------------------------------------------------------------------*/

/*2.math*/

var n1=9.2,n2=9.6;
console.log(Math.round(n1));     //9
console.log(Math.round(n2));     //10

console.log(Math.pow(2, 5));                          //32
console.log(Math.max(10,30,55,3.5,9.6,97.4));         //97.4
console.log(Math.min(10,30,55,3.5,9.6,97.4));         //3.5
console.log(Math.random());                           //0.21705991394882784   i.e,(0-0.999)
console.log(Math.random()*100);                       //36.86098087418716    i.e,(1-100)
console.log(Math.round(Math.random()*100));           //52   i.e,(1-100)

/*-----------------------------------------------------------------------------------------------------*/

/*3.string*/

var city="chennai";
var state='tamilnadu';

console.log(city,state);               //chennai tamilnadu


/*String is nothing but a array of character*/

console.log(city[1]);                  //h
console.log(state[0]);                 //t

console.log('hello\t\tworld');                         //hello           world
console.log('hello\t\tworld\n\nhello\t\tindia');     
                                                         
/*-----------------------------------------------------------------------------------------------------*/


/*4.string methods*/

var firstName = 'jino';
console.log(firstName.toUpperCase()); 
console.log(firstName.toLocaleUpperCase());      //JINO

var middleName = 'MINU';
console.log(middleName.toLowerCase());
console.log(middleName.toLocaleLowerCase());     //minu

console.log(middleName.slice(0, 2));          //MI

var names = 'mango, orange, grape, apple';
var fruit = names.split(', ');                /*d-limiter matched*/
console.log(fruit);                           //[ 'mango', 'orange', 'grape', 'apple' ]

var names = 'mango-orange-grape-apple';       
var fruit = names.split(', ');                 /*d-limiter doesn't matched*/
console.log(fruit);                            //[ 'mango-orang-grape-apple' ]

var names = 'mango-orange-grape-apple';       
var fruit = names.split('-');                 /*d-limiter matched*/
console.log(fruit);                           //[ 'mango', 'orange', 'grape', 'apple' ]

/*string property*/

var password = 'secret123';
console.log(password.length);       //9


/*-----------------------------------------------------------------------------------------------------*/

/*5.boolean*/

var success = true;
console.log(typeof success);            //boolean


/*-----------------------------------------------------------------------------------------------------*/

/*6.undefined*/

function add(a1,a2){
    a1+a2;
}

console.log(add(10,20));         //undefined

/*-----------------------------------------------------------------------------------------------------*/