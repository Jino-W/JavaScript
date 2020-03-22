/*

//falsy values:
 false, 0, undefined, NaN, '', null

//truthy values:
 !false, true, -1, 1, [], [2,4], {}, {name:'jino'}, dct academy', new Date(), 3.14
 -> truthiness is not the same as == true

 */


//c style
const values =[false, 0, undefined, NaN, '', null, !false, true, -1, 1, [], {},'dct academy'];

function filter(values){
    const truthy=[], falsy=[];
    for(i=0;i<values.length;i++){
        if(values[i]){
            truthy.push(values[i]);
        }
        else{
            falsy.push(values[i]);
        }
    }
    return [truthy, falsy];
}

console.log(filter(values));

/* o/p:
[ [ true, true, -1, 1, [], {}, 'dct academy' ],
  [ false, 0, undefined, NaN, '', null ] ]
*/


//js style
//separate functions to truthy and falsy values
function truthyFilter(values){
    return values.filter(function(value){
        return value
    })
}
console.log(truthyFilter(values));

function falsyFilter(values){
    return values.filter(function(value){
        return !value
    })
}
console.log(falsyFilter(values));

/*
//return value == true    (wrong)
[ true, true, 1 ]
//return value == false
[ false, 0, '', [] ]

//return value    (correct)
[ true, true, -1, 1, [], {}, 'dct academy' ]
[ false, 0, undefined, NaN, '', null ]
*/ 



//truthy-falsy values in a single function
function truFlsFilter(values){
    const truthy = values.filter(function(value){
        return value
    })

    const falsy = values.filter(function(value){
        return !value
    })
    return [truthy, falsy];
}
console.log(truFlsFilter(values));  


/*  o/p:
[ [ true, true, -1, 1, [], {}, 'dct academy' ],
  [ false, 0, undefined, NaN, '', null ] ]
*/