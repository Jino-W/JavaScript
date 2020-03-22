//   .hasOwnProperty()

function checkObject(obj, property) {
    if (Object.keys(obj).length == 0) {
        return 'invalid input'
    }
    if (obj.hasOwnProperty(property)) {
        return true
    } else {
        return false
    }

}


console.log(checkObject({'name':'gokul','city':'bangalore'},'name'));   //true

console.log(checkObject({'name':'gokul','city':'bangalore'},'age'));   //false