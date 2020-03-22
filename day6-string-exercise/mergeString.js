function mergeString(s1,s2){
    let s3 ='';                         
    for(let i=0 ; i< s2.length || i< s1.length ; i++){
        if(i< s1.length && i< s2.length){
            s3+=s1[i]+s2[i];
        }
        else if(i>=s1.length){
            s3+=s2[i];
        }
        else{                            //--or--   else if(i>=s2.length)
            s3+=s1[i];
        }
    }
    return s3;
}


const s1 ='jino';
const s2 ='esther';
let result = mergeString(s1,s2);                     //'jeisntoher'
console.log(result);
console.log(mergeString('hari','balan'));       //'hbaarlian'   

