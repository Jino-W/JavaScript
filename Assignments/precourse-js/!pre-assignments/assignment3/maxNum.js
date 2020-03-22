/*
Write a function called max, which accepts an array and returns the highest value.

Do not use the built-in Math.max() function!

Examples:

max([5, 1, 4, 7, 1, 2]); // 7

max([3, 4, 12, 1, 8]); // 12

max([-1, 6, 3, 2.2, -10, -4]); // 6
*/



function max(a){
    for(i=0;i<a.length;i++){
        if(a[i]>a[i+1]){
            var temp=a[i];
            a[i]=a[i+1];
            a[i+1]=temp;
        }
    }
    return temp;
}



console.log(max([5, 1, 4, 7, 1, 2]));             // 7
console.log(max([3, 4, 12, 1, 8]));               // 12
console.log(max([-1, 6, 3, 2.2, -10, -4]));       // 6