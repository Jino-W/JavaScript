function makeEven(n){
    var sum=0;
    for(var i=0;i<n.length;i++){
        sum=sum+n[i];
    }    
    if(sum%2===0){
        return 2;
    }
    else{
        return 1;
    }
    
}

var n1=[1,2,3,4,5];                   //1
var n2=[1,2,3,4,5,6,7];               //2

console.log(makeEven(n1));
console.log(makeEven(n2));