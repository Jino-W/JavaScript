function fiboSeries(n){
    var a =[0,1];
    var c;
    for(var i=1;i<n-1;i++){
        c=a[i-1]+a[i];
        a.push(c);
    }
    return a;
}


console.log(fiboSeries(5));
console.log(fiboSeries(10));

/*
o/p:-

[ 0, 1, 1, 2, 3 ]
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
*/



function fiboSeries(n){
    var first = 0, second = 1, next;
    for (c = 0; c < n; c++){
        if (c <= 1){
            next = c;
        }
        else{
            next = first + second;
            first = second;
            second = next;
        }
    }
    console.log(next);
}

console.log(fiboSeries(5));
console.log(fiboSeries(10));

/*
o/p:-

[ 0, 1, 1, 2, 3 ]
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
*/