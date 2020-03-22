/*
finding the year is leap year or not?
*/


function leapYear(n){
    if((n%100===0)?(n%400===0):(n%4===0)){      //(n%100===0)?(n%400===0):(n%4===0)
        return 'leap year';
    } 
    else{
        return 'not leap year';
    }
}

console.log(leapYear(1995));   //not leap year
console.log(leapYear(2020));   //leap year
console.log(leapYear(1996));   //leap year
console.log(leapYear(2016));   //leap year


//or


function leapYear(n){
    if(((n%4===0)&&(n%100!==0))||(n%400===0)){
        return 'leap year';
    } 
    else{
        return 'not leap year';
    }
}

console.log(leapYear(1995));
console.log(leapYear(2020));
console.log(leapYear(1996));
console.log(leapYear(2016));



/*
o/p:-

not leap year
leap year
leap year
leap year
*/
