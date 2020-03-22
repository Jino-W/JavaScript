//copy one string to another string  -**

const name ='virat';
// let player = name;   (or)
let player = '';
for(let i=0;i<name.length;i++){
    player = player +name[i];
}
console.log(player);


//string concatination
word='';
word+='a';
word+='b';
word+='c';
console.log(word);


//capitalization
console.log(player[0].toUpperCase() + player.slice(1));                //Virat
console.log(player.charAt(0).toUpperCase() + player.slice(1).toLowerCase());   //Virat


//reversing the string

let player1='';

for(i=name.length-1;i>=0;i--){
    player1 = player1 +name[i];
}
console.log(player1);