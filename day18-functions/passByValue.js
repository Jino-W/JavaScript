//1.primitive datatype: pass by value

let n1=10;

function change(n1){
    n1 =20;
    return n1;
}

console.log(change(n1))  //20  ->passing the copy of the original value
console.log(n1);       //10




//2.object / non-primitive datatype : pass by reference

//changes within the function also affect outside the function


const person = {
    name:'jino',
    city: 'chennai'
};

function changeObj(person, cityName){
    person.city = cityName;
    return person;
}

console.log(changeObj(person,'bangalore'));   //{ name: 'jino', city: 'bangalore' }
console.log(person);    //{ name: 'jino', city: 'bangalore' }



