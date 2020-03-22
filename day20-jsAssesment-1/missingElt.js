//find the missing element (singular)
function missingElement(array){
    for(i=1;i<array.length;i++){
        if(array[i] !== array[i-1] +1){           // (17 !== 15+1) => (17 !== 16)    => true
            return array[i-1]+1;          //16  <=  (15+1)   
        }
    }
}

console.log(missingElement([1,2,3,5]));                  //4
console.log(missingElement([15,17,18,19,20,21]));       //16


//---------------------------------------------------------------------------------


//find the missing elements (plural)
function missingElement2(array){
    const result = [];
    for(i=array[0]; i<=array[array.length-1];i++){
        if (!(array.includes(i))){
            result.push(i)
        }
    }
    return result
}

console.log(missingElement2([1,2,3,5]));     //[ 4 ]           
console.log(missingElement2([15,17,18,20,21]));  //[ 16, 19 ]

//----------------------------------------------------------------------

//find the missing elements (plural)
function missingElement1(array){
    for(i=array[0]; i<=array[array.length-1];i++){
        if (!(array.includes(i))){
            console.log(i)
        }
    }
}

missingElement1([1,2,3,5]);     //4           
missingElement1([15,17,18,20,21]);  //16   19






