function deleteProperty(student, property){
    delete student[property]
 return student
}


var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };

console.log(deleteProperty(student,'name'))