const fruits=['apple', 'mango'];
console.log(fruits);                   //[ 'apple', 'mango' ]

const veg =[];              //array literal
console.log(veg);    //[]

const names=new Array(2);
console.log(names);                //[ <2 empty items> ]  ->:sparse array
console.log(names.length)        //2

const city=new Array('bangalore');
console.log(city);                       //[ 'bangalore' ]

const town =new Array('chennai', 'tirunelveli');
console.log(town);                    //[ 'chennai', 'tirunelveli' ]

const numbers =[3,5];
console.log(numbers);                //[ 3, 5 ] ->:dense array

//fill()
const fillingArr = new Array(10);
fillingArr.fill(10);
console.log(fillingArr);                //[ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
