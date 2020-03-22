//key, value pair
function keyValue(obj) {
    const result = [];
    for (const key in obj) {
        result.push([key, obj[key]])
    }
    return result;
}

console.log(keyValue({'name':'John','city':'Alaska'}));  //[ [ 'name', 'John' ], [ 'city', 'Alaska' ] ]
console.log(keyValue({}));    //[]