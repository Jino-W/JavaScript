function Names(name, city, lastName){
    this.name = name;
    this.city= city;
    this.lastName= lastName;
    this.fullName = function(){
        return `${this.name} ${this.lastName}`
    }
    this.greet=function(){
        return `Hi there, i'm ${this.name}. I'm from ${this.city}`
    }
}

const person1 =new Names('Jino','chennai','W');
console.log(person1);
/*
Names {
  name: 'Jino',
  city: 'chennai',
  lastName: 'Esther',
  fullName: [Function] }
*/
console.log(person1.fullName());             //'Jino W'
console.log(person1.greet());               //'Hi there, i'm Jino. I'm from chennai'

const person2 =new Names();   //so,that we are passing arg so that during the run time we can assign the values to object while creating the object
console.log(person2);
/*
Names {
  name: undefined,
  city: undefined,
  lastName: undefined,
  fullName: [Function],
  greet: [Function] }
*/


const person3 = new Names()
person3.name = 'jino';
person3.city = 'madurai';
person3.lastName ='Esther';

console.log(person3);
/*
Names {
  name: 'jino',
  city: 'madurai',
  lastName: 'Esther',
  fullName: [Function],
  greet: [Function] }
*/

person3.name ='Hari';   //reassigning the value of name property in person3 object
console.log(person3)
/*
Names {
  name: 'Hari',
  city: 'madurai',
  lastName: 'Esther',
  fullName: [Function],
  greet: [Function] }
*/

console.log(typeof person1, typeof person2, typeof person3);          //object object object