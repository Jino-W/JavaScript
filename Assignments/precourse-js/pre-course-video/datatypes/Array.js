var ar = [];     

for (var i = 1; i <= 10; i++) {
    console.log(ar.push(i));          //'i' value is pushed as a first element,a[0]=1
    console.log(ar[i]);               //a[1] is undefined
}



/* o/p:
1            //'a[0]' value is now pushed. i.e, a[0]=1 ...('i' is a variable, not an index here)
undefined    //array only have a[0] value, but a[1]=? is asked,so..a[1] is undefined.
2
undefined
3
undefined
4
undefined
5
undefined
6
undefined
7
undefined
8
undefined
9
undefined
10
undefined
*/


var ar = [];
for(var i = 1;i <= 10;i++){
   console.log(ar.push(i));    //'i' value is pushed as a first element,a[0]=1
   console.log(ar[i-1]);       //a[1-1] = a[0] = 1
}


/*
1      //'a[0]' value is now pushed. i.e, a[0]=1 ...('i' is a variable, not an index here)
1      //a[0]=? is asked,so.. a[0]=1
2
2
3
3
4
4
5
5
6
6
7
7
8
8
9
9
10
10
*/



var ar = [];
for(var i = 1;i <= 10;i++){
   console.log(ar.push(i));    //'i' value is pushed as a first element,a[0]=1
   console.log(ar[i-1]);       //a[1-1] = a[0] = 1
}


