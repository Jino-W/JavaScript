function mergeStrings(s1,s2){
    let s3 ='';                         
    for(let i=0 ; i< Math.max(s2.length,s1.length) ; i++){
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


console.log(mergeStrings('bangalore', 'mysore')) //bmaynsgoarleore
console.log(mergeStrings('virat', 'kholi'))   //vkihroalti
