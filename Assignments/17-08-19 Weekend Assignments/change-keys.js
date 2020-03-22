//M1
function changeKeys(keys, array, shift){
    if(shift>9){
        return "index outofbound"
    }else{
    const result = [];
    for(i=0;i<array.length;i++){
        for(j=0;j<keys.length;j++){
            if(array[i]==keys[j]){
                if((j+shift)<keys.length){
                    result.push(keys[j+shift]);
                }else{
                    result.push(keys[j-keys.length+shift])   //myself wants the loop further starts from 0,so '-keys.length'
                }
            }
        }
    }
    return result;
    }
}


const keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

console.log(changeKeys(keys,['E', 'F'], 1));   //['F', 'F#']
console.log(changeKeys(keys,['G'], 5));       //['C']
console.log(changeKeys(keys,['G'], 1));   //['#G']
console.log(changeKeys(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],['E', 'F'], 10));   //index outofbound

//M2
// #indexOf()

function changeKeys(keys, array, shift){
    if(shift>9){
        return "index outofbound"
    }else{
    const result = [];
    for(i=0;i<array.length;i++){
        for(j=0;j<keys.length;j++){
            if(array[i]==keys[j]){
                if((j+shift)<keys.length){
                    result.push(keys[j+shift]);
                }else{
                    result.push(keys[j-keys.length+shift])   //myself wants the loop further starts from 0,so '-keys.length'
                }
            }
        }
    }
    return result;
    }
}
