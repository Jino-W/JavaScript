const programLan = ['javascript', 'ruby', 'phyton', 'java', 'c#', 'php'];
console.log(programLan.length);    //6
console.log(programLan[programLan.length]);    //php
console.log(programLan[programLan.length -1]);        //7


programLan[0]='c++';
programLan[programLan.length] = 'c##';
programLan[programLan.length - 1] = 'c';
console.log(programLan.length);

programLan[10]='javascript';
console.log(programLan.length);   //11
console.log(programLan[9]);    //undefined
console.log(programLan);
/*o/p:
[ 'c++',
  'ruby',
  'phyton',
  'java',
  'c#',
  'php',
  'c',
  <3 empty items>,
  'javascript' ]
  */

for (let i=0;i<programLan.length;i++){
    //console.log(languages);                 //[ 'javascript', 'ruby', 'phyton', 'java', 'c#', 'php' ]
    console.log(programLan[i]);
}


//-------------------------------------------------------



//'for' loop
//1.array
const languages = ['javascript', 'ruby', 'phyton', 'java', 'c#', 'php'];
for (i=0;i<languages.length;i++){
    //console.log(languages);                 //[ 'javascript', 'ruby', 'phyton', 'java', 'c#', 'php' ]
    console.log(languages[i]);
}
//2.string
const vowels ='aeiou';
for(i=0;i<vowels.length;i++){
    console.log(vowels[i]);
}

//forEach --------------------------------------
//(higher order function   ->function that takes another function as argument or a function that returns another function as result)
//1.array
const fruits = ['mango', 'apple', 'cherry'];
fruits.forEach(function(fruit){
    console.log(fruit);
})
//2.not applicable for strings

//forEach accept upto 3 arguments
fruits.forEach(function(fruit,index,fruits){
    console.log(fruit,index);
})



const location ='gb'
location.split('').forEach(function(A,index,Arr){
    console.log(A,index,Arr);
})



//for of--------------------------------------------
//Es6 feature.....but, first introduced in angular
//1.array
const names = ['jino','minu','sam','jim'];
for(const name of names){
    console.log(name);
}

//2.string
const cities ='bangalore';
for(const city of cities){
    console.log(city);
}





