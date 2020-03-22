function strWeight(str1, str2) {
    if (str1.length ==0 && str2.length ==0) {
        return 'invalid'
    }
    objAlphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, O: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < str1.length; i++){
        sum1 += objAlphabet[str1[i]];
    }
    for (let i = 0; i < str2.length; i++){
        sum2 += objAlphabet[str2[i]];
    }
    console.log(sum1,sum2)
    if (sum1 > sum2) {
        return 1;
    } else if (sum1 < sum2) {
        return 2;
    } else {
        return 'equal';
    }

}


console.log(strWeight('superman', 'batman'));
console.log(strWeight('batman', 'superman'));
console.log(strWeight('batman', 'manbat'));
console.log(strWeight('', ''));









//----------------------------------------------------


function strweight(str1,str2){
    let sum1=0,sum2=0
    
    for (i=0; i<str1.length||i<str2.length;i++){
        if(str1[i]){
            sum1+=str1.charCodeAt(i)-96
        }
        if(str2[i]){
            sum2+=str2.charCodeAt(i)-96
        }
    }

    if(sum1==sum2){
        return 'equal'
    }
    return (sum1>sum2 ? '1' : '2');
}

console.log(strweight('superman', 'batman'));
console.log(strweight('batman', 'superman'));
console.log(strweight('batman', 'manbat'));
console.log(strweight('', ''));

/*
107 51
1
51 107
2
51 51
equal
invalid
*/


/*
note:
'A' (65) to 'Z' (90)      //ASCII value of uppercase alphabets are from 65 to 90.
'a' (97) to 'z' (122)    //ASCII value of lowercase alphabets are from 97 to 122
*/