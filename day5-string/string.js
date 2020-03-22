const city='bangalore';
const playerName='jino';
const password='secret123';
console.log(city);                          //'bangalore'
console.log(typeof city);                   //'string'

//string is nothing but the array of characters accessed via index

console.log(city[0]);                //'b'
console.log(city[2]);                //'n' 

console.log(city.charAt(0));        //'b'

console.log(city.length);             //9 
console.log(city.toUpperCase());        //BANGALORE
console.log(password.length);          //9

console.log(city);  //bangalore
for(let i=0;i<city.length;i++){
    console.log(city.charAt(i));           //: city.charAt(i)  (or)  city[i];     ->/* o/p:
}

/*
b
a
n
g
a
l
o
r
e
*/