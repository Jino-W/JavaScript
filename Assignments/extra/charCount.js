function count(string, char){
    let sum =0 ;
    for(let i=0;i<string.length;i++){
        if(string[i]==char){
            sum+=1
        }
    }
    return sum;
}

console.log(count("dct academy", "c")) //2