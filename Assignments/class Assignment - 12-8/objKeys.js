function keys(object) {
    const result = [];
    for (const key in object){
        result.push(key);
    }
    return result;
}


var obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
var obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
var obj3 = {};
console.log(keys(obj3)); // []