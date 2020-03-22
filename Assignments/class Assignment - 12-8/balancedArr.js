/*
Suppose, we have an array 1 2 1 2 1 3. The Sum of first three elements is 1 + 2 + 1 = 4 and sum of last three elements is 2 + 1 + 3 = 6
So this is unbalanced, to make it balanced the minimum number we can add is 2 to any element in first half.
*/

//method 1
function balancedArray1(array){
    const balance = array.length / 2;
    const first = array.slice(0,balance);        //[1, 2, 1]
    const second = array.slice(balance);          //[2, 3, 1]
    let sum2=0,sum1=0;
    for(let i=0;i<first.length;i++){
         sum1+=first[i];              //1+2+1 = 4
         sum2+=second[i];           //2+3+1  = 6
    }
    const diff =Math.abs(sum1-sum2);   //diff = 2    :Math.abs() => only return positive value 
    return diff
}

console.log(balancedArray1([1, 2, 1, 2, 3, 1]));   //2
console.log(balancedArray1([4, 2, 2, 1, 3, 4]));   //0


//method 2*
function balancedArray(array){
    let sum1=0,sum2=0;
    for(let i=0;i<array.length/2;i++){          //1 , 2, 1
        sum1 +=array[i];             //1+2+1 = 4
    }
    for(let i=array.length-1;i>=array.length/2;i--){   //2, 3, 1
        sum2 +=array[i];      //2+3+1 = 6
    }
    diff = Math.abs(sum1-sum2);    //diff, (4 ~ 6) = 2
    return diff
}



console.log(balancedArray([1, 2, 1, 2, 3, 1]));   //2
console.log(balancedArray([4, 2, 2, 1, 3, 4]));   //0
console.log(balancedArray([4, 2, 2, 1, 0, 4]));   //3