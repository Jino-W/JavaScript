// capital char

function totalCaps(array) {
    let count = 0;
    array.forEach(function (arr) {
        for (const a of arr) {
            if (a == a.toUpperCase()) {
                count += 1; 
            }
        }
    })
    return count;
}


console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])) // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])) // 3
console.log(totalCaps(["hello", "world"])) // 0


// #string.charCodeAt(index)  - eg(str='abcd';   str.charCodeAt(0) => 97)
function totalCaps1(array) {
    let count = 0;
    array.forEach(function (arr) {
        for(let i=0;i< arr.length;i++){
            if(arr.charCodeAt(i)>= 65   &&   arr.charCodeAt(i)<= 90){
                count+=1;
                console.log(arr[i],'-', arr.charCodeAt(i));
/*
A - 65
E - 69
T - 84
I - 73
A - 65
E - 69
H - 72
E - 69
*/
            }
        }
    })
    return count;
}

console.log(totalCaps1(["AwesomE", "ThIngs", "hAppEning", "HerE"])) // 8
console.log(totalCaps1(["Elie", "Matt", "Tim"])) // 3
console.log(totalCaps1(["hello", "world"])) // 0