const passwords =['secret', 'secret123', 'passw@rd'];

function makeObj(arr){
  const ObjStr = {};

  for(let i=0;i<arr.length;i++){
    /*
    ObjStr[i]=arr[i];
    //o/p:
    { '0': 'secret','1': 'secret123','2': 'passw@rd',}
    */
    ObjStr[arr[i]]=arr[i].length;
  }
  const Obj={};
  /*
  for(i=0;i<arr.length;i++){
    obj[arr[i]] = arr[i].length;
  }
  */
  arr.forEach(function(a){
    Obj[a] = a.length;       //'a' is a variable here so we use square bracket
  })
  return [ObjStr,Obj]
}
console.log(makeObj(passwords));
/* o/p:
[ { secret: 6, secret123: 9, 'passw@rd': 8 },
  { secret: 6, secret123: 9, 'passw@rd': 8 } ]
*/

function makeArr1(objects){
  const arr=[];
  for(const key in objects){
    arr.push([key, objects[key]]);
  }
  return arr 
}
console.log(makeArr1({'secret' :6, 'secret123' :9, 'passw@rd' :8 }));   //[ [ 'secret', 6 ], [ 'secret123', 9 ], [ 'passw@rd', 8 ] ]


/*
function makeArr(objects){
    const result = Object.keys(objects).map(function(key) {
      return [key, objects[key]];
    });
    return result   
}
console.log(makeArr({'secret' :6, 'secret123' :9, 'passw@rd' :8 }));
*/
/* o/p:
[ [ 'secret', 6 ], [ 'secret123', 9 ], [ 'passw@rd', 8 ] ]
/*



/*1.
{
    'secret' :6,
    'secret123' :9,
    'passw@rd' :8
}

2.
[['secret', 6], ['secret123', 9], ['passw@rd', 8] ]

*/


//arr -> obj     //Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}     //{ ...['a', 'b', 'c'] }
/*var obj = arr.reduce(function(acc, cur, i) {
  acc[i] = cur;
  return acc;
}, {});
*/
