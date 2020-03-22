//min, max key values of the obj
function minMaxKeyInObject(obj) {
    const keys = Object.keys(obj);
    return [Math.min(...keys), Math.max(...keys)];
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));       // [1, 10]  <= (arr of number)
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));      // [1, 4]   <= (arr of number)



//----------------------------------------------------------------


function minMaxKeyInObject1(obj) {
    const keys = Object.keys(obj);
    keys.sort(function(a,b){
        return a-b;
    })
    return [keys[0], keys[keys.length-1]];
}

console.log(minMaxKeyInObject1({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));       // [ '1', '10' ]   <= (arr of string)
console.log(minMaxKeyInObject1({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));      // [ '1', '4' ]   <= (arr of string)


//---------------------------------------------------------------
//?

function minMaxKeyInObject2(obj) {
    const keys = Object.keys(obj);
    console.log(keys);        // [ '1', '2', '4', '7', '10' ]   <= sorted array
    for(let j=0; j<keys.length; j++){
        for(let i=0; i<keys.length; i++){
            if(keys[i]>keys[i+1]){
                temp = keys[i];
                keys[i]= keys[i+1];
                keys[i+1] = temp;
                console.log(keys[i], keys[i+1]);
            }
        }
    }
    console.log(keys);   //[ '1', '2', '4', '7', '10' ]   ?
    return [keys[0], keys[keys.length-1]];    //[ '1', '7' ]  ?
}

console.log(minMaxKeyInObject2({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));       // [ '1', '7' ]  ? <= (arr of string)
console.log(minMaxKeyInObject2({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));      // [ '1', '4' ]   <= (arr of string)


//------------------------------------------------------------------------


function minMaxKeyInObject3(obj) {
    const keys = Object.keys(obj);
    console.log(keys);        // [ '1', '2', '4', '7', '10' ]   <= sorted array
    const values = Object.values(obj);
    console.log(values);    // [ 'c', 'a', 'e', 'b', 'd' ]   <= sorted array based on key values
    return [keys[0], keys[keys.length-1]]; 
}

console.log(minMaxKeyInObject3({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));       // [ '1', '10' ]   <= (arr of string)
console.log(minMaxKeyInObject3({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));      // [ '1', '4' ]   <= (arr of string)