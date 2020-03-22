var location;
console.log(location);              //'undefined'
console.log(typeof location);          //'undefined'
console.log(typeof typeof location);     //'string'

var city ='bangalore';
console.log(city);
console.log(typeof city);        //'string'
console.log(typeof typeof city);  //'string'

var n1=10,n2=20,n3=30;
console.log(n1,n2,n3);
console.log(typeof n1);
console.log(typeof typeof n1);         //'string'

state ='karnataka';  //not a good practise
console.log(state);


var prices =[15,25,35];
console.log(prices);
console.log(typeof prices);      //'object'
console.log(typeof typeof prices);

var person={
    firstName:'sachin',
    lastName:'tendulkar'
}

console.log(person);            //{ firstName: 'sachin', lastName: 'tendulkar' }
console.log(typeof person);   //'object'

var isUserAdmin=false;
console.log(isUserAdmin);       //false
console.log(typeof isUserAdmin); //'boolean'

var greet =function(name){
    return 'hi there '+name;
}

console.log(greet);
console.log(greet('jino'));         // 'hi there jino'
console.log(typeof greet)  //fucnction
console.log(typeof typeof greet);    //'string'


function sayHello(){
    return 'hello there';
}

console.log(sayHello);
console.log(typeof sayHello); //function

//----------------------------------------------------------------------------------

console.log(('*').repeat(5))   //*****

function repeating(str, n){
    for(i=1;i<=n;i++){
        console.log(('*').repeat(i))
    }
}

repeating('*',5)

function repeating1(str, n){
    for(i=1;i<=n;i++){
        let repeat = ''
        for(j=1;j<=i;j++){
            console.log(repeat += str)
        }
    }
}

repeating1('*',5)










