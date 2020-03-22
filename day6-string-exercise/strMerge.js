
function mergeString(str1,str2){
    let maxArrLength = Math.max(str1.length, str2.length)   //finding largest length string
    let strMerge =''
    for(i= 0; i< maxArrLength; i++){
        if(i< str1.length){
            strMerge += str1[i]
        }
        if(i< str2.length){
            strMerge += str2[i]
        }
    }
    return strMerge
}

const str1 ='pon';
const str2 ='minu';
let resultFinal = mergeString(str1,str2);                     //'pmoinnu'
console.log(resultFinal);
console.log(mergeString('jim','david'));                    //'jdiamvid'





//--------------------------------- (or) ----------------------------------------------










function zip(a, b) {
    var i,
        l = Math.min(a.length, b.length),
        temp = '';

    for( i = 0; i < l; i++) {
        temp += a[i] + b[i];                      //'as' 'ra' 'um'
    }
    return temp + a.slice(i) + b.slice(i);        //'asraum' + 'l' + 'undefined'
}

console.log(zip('arul', 'sam')); 
console.log(zip('hari', 'balan'));  
console.log(zip('bharani', 'dharan')); 

/*
asrauml
hbaarlian
bdhhaarraanni
*/



//--------------------------------- (or) ----------------------------------------



