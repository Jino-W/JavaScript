function divisible(a,x,y){
    if((a%x===0) && (a%y===0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(divisible(3,1,3));
console.log(divisible(12,2,6));
console.log(divisible(100,5,3));
console.log(divisible(12,7,5));