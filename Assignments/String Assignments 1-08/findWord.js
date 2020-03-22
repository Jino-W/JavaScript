// word-frequency

function findWord(sentence, word){    
    let count = 0;
    const arrSentence = sentence.split(' ');         //[ 'The', 'quick', 'brown', 'fox' ]
    console.log(arrSentence);
    for (i = 0; i < arrSentence.length; i++){
        if(arrSentence[i] == word) {
            count += 1;
        }
    }
    return word + ' was found ' + count + ' times.';   //fox was found 1 times.
}

console.log(findWord('The quick brown fox', 'fox')); 
console.log(findWord('aa bb cc dd aa', 'aa'));

/*
[ 'The', 'quick', 'brown', 'fox' ]
fox was found 1 times.
[ 'aa', 'bb', 'cc', 'dd', 'aa' ]
aa was found 2 times.
*/