const playerName ='virat';
const word='awesome';

//1.properties------------------------------------------

//length
console.log(word.length);        //7   (number)



//2.methods()---------------------------------------------
/* 
All string methods return a new value. They don't change the original variable.
*/

//same methode have multiple arguments is call as method overloading.var
//depending upon the datatype it -method overriding

//casing
console.log(word.toUpperCase());    //AWESOME
console.log(word.toLowerCase());    //awesome

//search
console.log(word.search('s'));     //3    (position)
console.log(word.search('e'));         //2 (position)

//indexOf & lastIndexOf
console.log(word.indexOf('e'));         //2  (position, L->R check)
console.log(word.lastIndexOf('e'));         //6  (position, R->L check)  )
console.log(word.indexOf('e')>=0);         //true   (conditional check)
console.log(word.indexOf('z'));           //-1

//includes
console.log(word.includes('e'));          //true      (boolean)
console.log(word.includes('z'));          //false    (boolean)

//repeat
console.log('*'.repeat(4));             //  ****  
console.log('*'.repeat(0));              //''

//charAt
console.log(word.charAt(3));     //'s'   (string)

console.log(word[0]);            //'a'       //index access of string



//Extracting methods()---------------------------------------

//const playerName='virat'

//slice(pos, upto pos)
console.log(playerName.slice(1,3));  //'ir'      (from position to the length specified)
console.log(playerName.slice(0,3));  //'vir'     (from position to the length specified)
console.log(playerName.slice(2));   //'rat'       ((from position to the end))
console.log(playerName.slice(-2));   //'at'

//substring(pos, upto pos)
console.log(playerName.substring(1,3));         //'ir'    :<- 'awesome'
console.log(playerName.substring(2));            //'rat'
console.log(playerName.substring(-2));           //'virat'         (doesn't accept negative index)   ?????  

//substr(pos, length)
console.log(playerName.substr(1,3));          //'ira'
console.log(playerName.substr(2));          //'rat'
console.log(playerName.substr(-2));          //'at'  (from right 2 words)
console.log(playerName.substr(-4));     //irat

//replace
let strr1 = 'hello jino how r u'
console.log(strr1.replace('how', 'where'));  //hello jino where r u
console.log(playerName.replace('i', 'h'));      //'vhrat'


//concat('' , '')
const text1='hello';
const text2=' world';
let text3 = text1.concat(text2);         //'hello world'
console.log(text3);                                 
let text4 = 'Hai, '.concat('jino');
console.log(text4);                           //'Hai, jino'

//trim()          ->:the string with removed whitespace.
let wish = '       congratulations jino      ';
console.log(wish.trim());                //'congratulations jino'
let wish1 = '       goodluck        hari    ';
console.log(wish1.trim());                 //'goodluck        hari'


//3.converting string to array---------------------------------------------------------

//split()
console.log(playerName.split());     //[ 'virat' ]
const name='jino';
console.log(name.split(''));      //[ 'j', 'i', 'n', 'o' ]
const txt = "a,b,c,d,e";
console.log(txt.split(','));      //[ 'a', 'b', 'c', 'd', 'e' ]     -> , inside the split method is called as d-limiter
console.log(txt.split(''));       //[ 'a', ',', 'b', ',', 'c', ',', 'd', ',', 'e' ]        ->without dlimiter


//---------------------------------------------------------------------------------------------------------




//4.Array to string--------------------------------------------


let Arr =[2,4,5,8,3,1];
console.log(Arr);                      //[ 2, 4, 5, 8, 3, 1 ]

//join('')
console.log(Arr.join(''));             //'245831'    -> no-originalValue-change
console.log(Arr);                      //[ 2, 4, 5, 8, 3, 1 ]

//reverse()
console.log(Arr.reverse());            //[ 1, 3, 8, 5, 4, 2 ]     -> originalValue-change
console.log(Arr);                      //[ 1, 3, 8, 5, 4, 2 ]

//toString()
console.log(Arr.toString());           //'1,3,8,5,4,2'   ->no-originalValue-change
console.log(Arr);                      //[ 1, 3, 8, 5, 4, 2 ]

//-----------------------------------------

//toString()
let Arr1=[ 1, 3, 8, 5, 4, 2 ];
let str =Arr1.toString()
console.log(str);           //'1,3,8,5,4,2'   ->no-originalValue-change

//split('')
console.log(str.split(','));           //[ '1', '3', '8', '5', '4', '2' ]
console.log(str);                    //'1,3,8,5,4,2'     ->no-originalValue-change


//toString()
const num=23;
console.log(num.toString());

