// obj values
function values(obj) {
    const result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}


var obj = { a: 1, b: 2, c: 3 };

console.log(values(obj)); // [1,2,3]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };

console.log(values(obj2)); // ["Matt", "Lane", true]

var obj3 = {};

console.log(values(obj3)); // []