//substr(pos, length or count)
function stringChop(resource,length){
    let arrStrChop=[];
    let strPush ='';
    for(let i=0;i<resource.length;){
        strPush = resource.substr(i, length);  //i=0,length=2 => strPush = 're'
        arrStrChop.push(strPush);        //arrStrChop = ['re']
        i=i+length;   // i=0+2 -> i=2
    }
    return arrStrChop;
}
    
console.log(stringChop('resource'));
console.log(stringChop('resource ', 2));
console.log(stringChop('resource', 3));

//------------------------ (or) ---------------------------

//slice(pos, upto pos)
function stringChop1(resource1,length1){
    let arrStrChop1=[];
    let strPush1 ='';
    for(let j=0;j<resource1.length;j+=length1){
        strPush1 = resource1.slice(j, j+length1);  // slice(0, 0+2) -> slice(0, 2) = 're' 
        arrStrChop1.push(strPush1);         //  ['re']
    }
    return arrStrChop1;
}
    
console.log(stringChop1('resource'));             // ["resource"]
console.log(stringChop1('resource ', 2));        //[ "re", "so", "ur", "ce"] 
console.log(stringChop1('resource', 3));         // ["dcr", "eso", "urc", "e"]