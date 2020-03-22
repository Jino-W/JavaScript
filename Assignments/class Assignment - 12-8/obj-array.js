function entries(obj) {
    const result = [];
    for (const key in obj) {
        result.push([key,obj[key]])
    }
    return result
}


var obj = { a: 1, b: 2, c: 3 };

entries(obj); // [["a",1], ["b",2], ["c",3]]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };

entries(obj2); // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

var obj3 = {}; entries(obj3); // []


