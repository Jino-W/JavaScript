/*
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
"Example Input" ==> "iNPUT eXAMPLE"
*/

function stringTransformer(str){
    const array = str.split(' ');
    const arrResult = [];
    array.forEach(function(arr){
        let result = '';
        for(const a of arr){
            if(a == a.toUpperCase()){
                result += a.toLowerCase();
            }else{
                result += a.toUpperCase();
            }
        }
        arrResult.push(result);
    })
    return arrResult.reverse().join(' ');
}
    

console.log(stringTransformer("iNPUT eXAMPLE"));   //Example Input
console.log(stringTransformer("Example Input"));   //iNPUT eXAMPLE


//------------------------------------------------------------------------------------



function stringChange(str){
    return str
      .split(' ')             //['Example', 'Input']
      .reverse()              //['Input', 'Example']
      .join(' ')              //'Input Example'
      .split('')              //'I','n','p','u','t',' ','E','x',....
      .map(v => v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase())
      .join('');
}

console.log(stringChange("iNPUT eXAMPLE"));   //Example Input
console.log(stringChange("Example Input"));   //iNPUT eXAMPLE



//--------------------------------------------------------------------------------------





