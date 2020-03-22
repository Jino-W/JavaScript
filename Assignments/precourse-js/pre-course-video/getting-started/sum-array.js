function sumArray(a){
    var sum=0;
    for(i=0;i<a.length;i++){
        if (a[i]>0){
            sum=sum+a[i];
        }
    }
    return sum;
}

var n=[10,52,4.5,-10];

console.log(sumArray(n));