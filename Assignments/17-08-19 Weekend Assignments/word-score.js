function highestScoringWord(str1) {
    const array = str1.split(' ');
    objAlphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    const resultObj ={};
    for (let i = 0; i < array.length; i++){
        for(let j=0; j < array[i].length; j++){     
            if(resultObj[array[i]]){
                resultObj[array[i]] += objAlphabet[array[i][j]];
            }else{
                resultObj[array[i]] = objAlphabet[array[i][j]];
            }
        }
    }
    
    const max = Math.max(...Object.values(resultObj));
    for(const key in resultObj){
        if(resultObj[key]==max){
            return key;
        }
    }   
}






console.log(highestScoringWord("a b c d e f")); // "f"

console.log(highestScoringWord("hello world")); // "world"

console.log(highestScoringWord("go ahead make my day")); // "my"

console.log(highestScoringWord("there is no place like home")); // "there"

console.log(highestScoringWord("aaaaaa bbb cc f")); // "aaaaaa"

console.log(highestScoringWord("bbb cc f aaaaaa")); // "bbb"

console.log(highestScoringWord("this sentence has two highest scoring words")); // "sentence"


/*
f
world
my
there
aaaaaa
bbb
sentence
*/

function highestScoringWord1(str1) {
    const strlist=str1.split(' ')
    let result=''
    let max=0
    strlist.forEach((item) => {
        let total=0
        for (i=0;i<item.length;i++){
            total+=item.charCodeAt(i)-96
        }
        if(total>max){
            result=item
            max=total
        }
    });
    return result;
}

console.log(highestScoringWord1("bbb cc f aaaaaa")); // "bbb"

console.log(highestScoringWord1("this sentence has two highest scoring words")); // "sentence"

//-----------------------------------------------------------------------------------------
