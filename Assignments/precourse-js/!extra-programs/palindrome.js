/*  1

function palindrome(a){
    console.log(a);                 //level  
    var b=[];
    
    for(i=a.length-1;i>=0;i--){
        b.push(a[i]);
    }
    // var s =b.toString();                //l,e,v,e,l 
    var s =b.join('');             //level
    console.log(s);                
    if(s===a){
        return 'palindrome';
    }
    else{
        return 'not palindrome';
    }   
}
console.log(palindrome('level'));     //palindrome
console.log(palindrome('radar'));     //palindrome
console.log(palindrome('1891'));     //not palindrome
*/


//or-------------------------------------------------------------------------------



/*   2
var a='level';
console.log(a);
var split=a.split('');
console.log(split); 
var reverse=split.reverse();
console.log(reverse);
var join=reverse.join('');
console.log(join);
if(a===join){
    console.log('palindrome');
}
else{
    console.log('not palindrome');
}
/*

/* o/p://a='level'

level
[ 'l', 'e', 'v', 'e', 'l' ]
[ 'l', 'e', 'v', 'e', 'l' ]
level
palindrome

o/p://a='leveh'

leveh
[ 'l', 'e', 'v', 'e', 'h' ]
[ 'h', 'e', 'v', 'e', 'l' ]
hevel
not palindrome
*/


//or----------------------------------------------------------------------------


/*     3

function palindrome(a){
    var b=[];
    for(var i=0;i<a.length;i++){
        if(typeof a[i] === 'string'){
            console.log(a[i]);
            var split=a[i].split('');            //[ 'j', 'i', 'n', 'o' ]
            console.log(split); 
            var reverse=split.reverse();         //[ 'o', 'n', 'i', 'j' ]
            console.log(reverse);
            var join=reverse.join('');           //onij
            console.log(join);
            b.push(join);
        }
        else{
            console.log(a[i]);
            var numToString = a[i] + '';
            var joinString=numToString.split('').reverse().join('');    //1981
            console.log(joinString);
            var join = parseInt(joinString, 10);
            b.push(join);
        }
    }
    for(var i=0;i<a.length;i++){
        if(a[i]===b[i]){
            console.log('palindrome');
        }
        else{
            console.log('not palindrome');
        }
    }
}
var a=['level', 1891 , 'jino', 2002 ];
palindrome(a);

*/

//--------------------------------------------------------------------------------------------

function palindrome(a){
	a=a.toString()
	var b='';
	for(var i=a.length-1;i>=0;i--){
        b=b+a[i];
        console.log(b);
    }
    console.log(b);
	if(a===b){
		return true;
	}
	return false;
}

console.log(palindrome('madam'));
console.log(palindrome('jino'));

/* o/p:-

m
ma
mad
mada
madam
madam
true
o
on
oni
onij
onij
false

*/

//--------------------------------------------------------------------------