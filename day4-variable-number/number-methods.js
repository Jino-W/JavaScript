//: Datatypes:    I. primitive data type -> only holds the value

//1.number

var n1=12.4;
var n2= 18;
var n3=19.7;

//METHODS:

        //console.log(n1.round);      -> numbers doesn't have methods
console.log(Math.round(n1));   //12     ->round the number        //:js provide Math object to do operations on numbers.
console.log(Math.ceil(n1));    //13       ->:Higher value
console.log(Math.floor(n3));   //19        ->:lower value
       
          //     ...   ->   spread operator
var a=[2,4,5,50];
console.log(Math.min([2,4,5,50]));  //NaN
console.log(Math.min(...[2,4,5,50]));  //:spread operator ->   //2
console.log(Math.min(a));           //NaN
console.log(Math.min(...a));         //:Spread operator ->  //2
console.log(Math.min(2,4,5,50));     //2


console.log(Math.max(2,4,5,50));      //50
console.log(Math.abs(-2));           //2   ->:return positive number
console.log(Math.sqrt(16));          //4  ->:square root
console.log(Math.pow(3,2));           //9    ->3(power 2)
console.log(Math.PI);               //3.141592653589793

//boolean
const x=true;
const y=false;

console.log(Number(x));            //1
console.log(Number(y));           //0

//new Date()
const z=new Date();
console.log(z);                   //2019-07-31T06:31:24.352Z

//string to number
const str ='50'
const str1 ='10 20';
const str2 ='year 20';
const str3 ='10 year';
const str4 = '19.96';
//Number()
console.log(Number(str));           //50 
console.log(Number(str1));        //NaN
//parseInt()
console.log(parseInt(str1));             //10
console.log(parseInt(str2));            //NaN
console.log(parseInt(str4));             //19
//parseFlaot()
console.log(parseFloat(str4));   //19.96




