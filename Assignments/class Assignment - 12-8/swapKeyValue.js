function swapKeyAndValue(getObj, key1) {
    //const newObj ={};
    const obj = Object.assign({},getObj);
    for (let key in obj) {
        if (key == key1) {
            let temp = obj[key1];
            obj[temp] = key1;
            delete obj[key1];
        }
    }
    
    return obj;
}

var instructorArr = { name: 'Elie', job: 'Instructor' };
console.log(swapKeyAndValue(instructorArr, 'job')); // {name: "Elie", Instructor: 'job'}
console.log(swapKeyAndValue(instructorArr, 'name')); // {Elie: 'name', job: "Instructor"}

//pass by reference  -> modification inside the function gonna affevt the original value of the object
//pass by value ->original value doesn't get affected