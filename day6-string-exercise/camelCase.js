function underToCamel(str){
    let result ='';
    const word =str.split('_');
    result+=word[0].toLowerCAse();
    for(let i=1;i<word.length;i++){
       
        result+= word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
    }  
    return result;  //camel case

}


console.log(underToCamel('first_name')); //snake case
console.log(underToCamel('order_line_item'));

/*
firstName
orderLineItem
*/
