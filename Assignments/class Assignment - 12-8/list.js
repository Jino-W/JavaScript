function listProperties(a){
    const keys = Object.keys(a);          //[ 'name', 'sclass', 'rollno' ]
    if (keys.length > 0) {
        return keys.length
    } else {
        return 'empty object'
    }
}

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
var empty =[];


console.log(listProperties(student));    //3
console.log(listProperties(empty));  //'empty object'


///--------------------------------------------------
