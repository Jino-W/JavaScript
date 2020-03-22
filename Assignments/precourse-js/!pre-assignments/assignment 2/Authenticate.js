/*
Create a function, authenticate, which takes an array and a string as it's input.

The array will be an array of strings representing a list of passwords! The string is a password. If the password input matches one of the passwords in the array, return the string 'authenticated', otherwise return 'not authenticated'

Note: You should not use the Array method .indexOf() or .includes()

Examples:

var passwords = [
  'Password123',
  'dct@academy',
  'qwerty',
  'secret123',
  'gopro123',
  'harryp@tter'
];

INPUT: authenticate(passwords, 'Password123');
OUTPUT: 'authenticated'
INPUT: authenticate(passwords, 'Balrog');
OUTPUT: 'not authenticated'
*/


function authenticate(a,b){
    
    for(i=0;i<a.length;i++){          //'i' is an index
        if (a[i] === b){
            return 'authenticated';
        }
    }
    return 'not authenticated';
}

var passwords = ['Password123', 'dct@academy', 'qwerty', 'secret123', 'gopro123', 'harryp@tter'];
console.log(authenticate(passwords, 'Password123'));
console.log(authenticate(passwords, 'Balrog'));
console.log(authenticate(passwords, 'gopro123'));
console.log(authenticate(passwords, 'hari'));