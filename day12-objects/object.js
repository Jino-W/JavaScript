//array: ordered, integer indexed, collection of values
//Object :an object is unordered, string indexed, collection of values


const person= {
    firstName: 'jino',
    'city' : 'bangalore',
    profession : 'software engineer',
    'age' : 23,
    hobbies: ['reading', 'travelling'],
    contact: {
        email:'jinoesther@gmail.com',
        mobile: '1234567890'
    },
    married: false
};

console.log(person.married);         //false

//read ->dot operator,  square bracket ['as string'] 
console.log(person.contact.email);             // 'jinoesther@gmail.com'
console.log(person['contact']['email']);      //'jinoesther@gmail.com'

//undefined
console.log(person.likes);            //undefined
console.log(person.likes == undefined);         //true       -1

//find : hasOwnProperty()
console.log(person.hasOwnProperty('firstName'));  //true   -2
console.log(person.hasOwnProperty('address'));    //false

//we can use array methods to objects
console.log(Object.keys(person).includes('likes'));     //false  -3

//add new property to an object
person.company = 'CTS';
console.log(person);
/* o/p:
{ firstName: 'jino',
  city: 'bangalore',
  profession: 'software engineer',
  age: 23,
  hobbies: [ 'reading', 'travelling' ],
  contact: { email: 'jinoesther@gmail.com', mobile: '1234567890' },
  married: false,
  company: 'CTS' }
*/

//Updating the property
person.age +=10;          //:23+10
console.log(person.age);    //33
person.age = 80;        //80

//deleting an property
delete person.hobbies;
console.log(person);
/*o/p:
{ firstName: 'jino',
  city: 'bangalore',
  profession: 'software engineer',
  age: 24,
  contact: { email: 'jinoesther@gmail.com', mobile: '1234567890' },
  married: false,
  company: 'CTS' }
*/





//---------------------------------------------------------------------



//find all the keys
console.log(Object.keys(person));
/*
[ 'firstName',
  'city',
  'profession',
  'age',
  'contact',
  'married',
  'company' ]
*/

//we can use array methods to objects
console.log(Object.keys(person).includes('likes'));     //false  -3

//find all the values
console.log(Object.values(person));
/*
[ 'jino',
  'bangalore',
  'software engineer',
  80,
  { email: 'jinoesther@gmail.com', mobile: '1234567890' },
  false,
  'CTS' ]
*/

console.log(Object.values(person).includes('jino'));  //true



