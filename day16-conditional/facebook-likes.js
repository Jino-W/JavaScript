function likes(names){
    if(names.length == 0){
        return 'no one likes this'
    }else if(names.length == 1){
        return `${names[0]} likes this`
    }else if(names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    }else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
        return  `${names[0]}, ${names[1]} and ${names.length -2} like this`
    }
}

console.log(likes([]));
console.log(likes(['jino']));
console.log(likes(['jino','minu']));
console.log(likes(['jino','minu','sam']));
console.log(likes(['jino','minu','sam','jim']));
console.log(likes(['jino','hari','minu','sam','jim']));


/* o/p:
no one likes this
jino likes this
jino and minu like this
jino, minu and sam like this
jino, minu and 2 like this
jino, hari and 3 like this
*/

//-----------------------------------------------------------

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

function FbLikes(names){
    var text;
    switch(names.length){
        case 0:
            text = 'no one likes this'       //undefined likes this  <- if no return or break then the o/p is
            
        case 1:
            text =  `${names[0]} likes this`
            break
        case 2:
            text =  `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            text =  `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        default:
            text =   `${names[0]}, ${names[1]} and ${names.length -2} like this`
            break;
    }
    return text;
}

console.log(FbLikes([]));
console.log(FbLikes(['jino']));
console.log(FbLikes(['jino','minu']));
console.log(FbLikes(['jino','minu','sam']));
console.log(FbLikes(['jino','minu','sam','jim']));
console.log(FbLikes(['jino','hari','minu','sam','jim']));

/*
no one likes this
jino likes this
jino and minu like this
jino, minu and sam like this
jino, minu and 2 like this
jino, hari and 3 like this
*/