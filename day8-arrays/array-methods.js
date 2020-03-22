//Array:Mutable methods
//1.add elements:

//push()
const players = ['virat', 'dhoni', 'shikar'];
console.log(players.push('jino'));        //4
console.log(players);                        //[ 'virat', 'dhoni', 'shikar', 'jino' ]

//unshift()
console.log(players.unshift('hari'));    //5
console.log(players);                     //[ 'hari', 'virat', 'dhoni', 'shikar', 'jino' ]

//splice()  :->always returns the removed element
console.log(players.splice(2,0,'esther'));  //[]    :->no array is removed
console.log(players)                  //[ 'hari', 'virat', 'esther', 'dhoni', 'shikar', 'jino']
console.log(players.splice(2,1,'joe'));   //[ 'esther' ]
console.log(players);                   //[ 'hari', 'virat', 'joe', 'dhoni', 'shikar', 'jino' ]


const a = new Array(1)
console.log(a)
a.push(10,20)
console.log(a)
console.log(a.length)   //3
console.log(a[1])
console.log(a[0])
/*
[ <1 empty item> ]
[ <1 empty item>, 10, 20 ]
3
10
undefined
*/


//2.remove elements:

//pop()
console.log(players.pop());              //'jino'
console.log(players);                    //[ 'hari', 'virat', 'esther', 'dhoni', 'shikar' ]

//shift()
console.log(players.shift());         //'hari'
console.log(players);                     //[ 'virat', 'esther', 'dhoni', 'shikar' ]

//splice()
console.log(players.splice(2, 1));       //[ 'dhoni' ] 
console.log(players);                  // [ 'virat', 'esther', 'shikar' ]
console.log(players.splice(1, 2));       //[ 'esther', 'shikar' ]
console.log(players);                 //[ 'virat' ]

//arrays are mutable
const fruits =['apple', 'mango', 'watermelon'];
fruits[1]='sapota';        //['apple', 'sapota', 'watermelon'];

//strings are immutable
const city ='bangalore';
console.log(city);
city[0]='m';
console.log(city); //'mangalore'


//split
console.log('jino mini sam'.split(','))
const str = 'jino minu sam'
console.log(str.split('-'))







