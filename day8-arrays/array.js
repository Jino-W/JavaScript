const p1='virat';
const p2='dhoni';
const p3='shikar';
console.log(p2);         //'dhoni'

//Array: ordered, integer indexed, collection of values

//index access
const players =['virat','dhoni', 'shikar'];
console.log(players[2]);      //'dhoni'
console.log(players[3]);      //undefined

//collection of values of different datatype
const mixed=[10,'jino',[10,4],true,{name:'dhoni'}];
console.log(mixed[4]);
console.log(typeof mixed);     //'object'    ->array's datatype is object
console.log(Array.isArray(mixed));     //true

//object
const person={
    name:'hari'
}
console.log(typeof person);        //'object'
console.log(typeof null);        //'object'



//----------------------------------  MY WORK  ------------------------------------------

var a=[2,4,5,50];
console.log(Math.min([2,4,5,50]));  //NaN
console.log(Math.min(...[2,4,5,50]));  //:spread operator ->   //2
console.log(Math.min(a));           //NaN
console.log(Math.min(...a));         //:Spread operator ->  //2



//array method to find the maximum number
console.log(Math.max.apply(null, a));   //50
console.log(Math.min.apply(null, a));   //2



//sorting an object
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
console.log(cars.sort(function(a, b){return a.year - b.year}));

/* o/p:-
  [ { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 } ]
*/
