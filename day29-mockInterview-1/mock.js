//const assoArr = ['a':1 ,'b':2]
    /*https://www.hiren.dev/2011/10/convert-javascript-object-to.html

    //1. object to associative array
    function toArray(_Object){
       var _Array = new Array();
       for(var name in _Object){
               _Array[name] = _Object[name];
       }
       return _Array;
    }

    //2.associative array to object
    function toObject(_Array){
       var _Object = new Object();
       for(var key in _Array){
              _Object[key] = _Array[key];
       }
       return _Object;
    }



// Associative arrays
In JavaScript, objects are also associative arrays (or hashes). That is, the property
    */


//wthout conditionals find odd/even


const n = 15
const arr = ['even', 'odd']
const ind = n%2
console.log(arr[ind])   //odd

const a = [20,47,51,3,2]
const array = ['even', 'odd']
for(let i=0;i<a.length;i++){
    const index = a[i]%2
    console.log(array[index])
}
/*
even
odd
odd
odd
even
*/
