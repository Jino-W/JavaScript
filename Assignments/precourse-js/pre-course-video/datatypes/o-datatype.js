/*2)Object data type*/


/* 1.Array:  Ordered, integer intexed, collection of values  */
var player1='sachin';
var player2='dhoni';
var player3='virat';
var players=['sachin', 'dhoni', 'virat'];

/*ordered*/
console.log(players);                                    //[ 'sachin', 'dhoni', 'virat' ]


/*index*/
console.log(players[0]);                    //sachin
console.log(players[3]);                    //undefined


/*-----------------------------------------------------------------------------------------------------*/


/*2.Array methods: PUSH - UNSHIFT - POP - SHIFT */
console.log(players.length);                 //3


console.log(players.push('rahul'));          //4
console.log(players);                        //[ 'sachin', 'dhoni', 'virat' ,'rahul' ]

console.log(players.unshift('azar'));        //5
console.log(players);                        //[ 'azar', 'sachin', 'dhoni', 'virat' ,'rahul' ]

console.log(players.pop());                  //rahul
console.log(players);                        //[ 'azar', 'sachin', 'dhoni', 'virat' ]

console.log(players.shift());                //azar
console.log(players);                        //[ 'sachin', 'dhoni', 'virat' ]

console.log(players.includes('sunil'));      //false
console.log(players.includes('virat'));      //true

/*-----------------------------------------------------------------------------------------------------*/

/*2.Array methods: PUSH - UNSHIFT - POP - SHIFT */

for(i=0;i<players.length;i++){             //for loop (access array via index)
    console.log(i,players[i]);
}

players.forEach(function(player){          //forEach mathod (access array by passing the element as a argument to the function)
    console.log(player);
})



/*-----------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------*/




/*3)Object data type : object is an un ordered,object/string indexed,collection of values*/

var person = {
    firstName:'Aniruddha',
    city:'Bangalore',
    details:function(){
        return 'function inside the object';
    },
    thisDetails:function(){
        return 'My name is' + ' ' + this.firstName + ' ' + 'and i live in' + ' ' + this.city;
    }
};

console.log(person['firstName']);     //Aniruddha
console.log(person.firstName);        //Aniruddha
console.log(person.city);             //Bangalore
console.log(person.details);          //[function : details]
console.log(person.details());        //function inside the object

console.log(person.thisDetails());         //My name is Aniruddha and i live in Bangalore

/*-----------------------------------------------------------------------------------------------------*/

/*3)Object methods iteration*/

console.log(Object.keys(person));         //['firstName','city','details','thisDetails']
console.log(Object.values(person));       //[ 'Aniruddha','Bangalore',[Function: details],[Function: thisDetails] ]

for(var key in person){
    console.log(key, person[key]);
}

/* o/p:
firstName Aniruddha
city Bangalore
details function(){
        return 'function inside the object';
    }
thisDetails function(){
        return 'My name is' + ' ' + this.firstName + ' ' + 'and i live in' + ' ' + this.city;
    }  
*/

console.log(Object.keys(person).includes('state'));                                //false
console.log(Object.values(person).includes('Bangalore'));                          //true


/*-----------------------------------------------------------------------------------------------------*/