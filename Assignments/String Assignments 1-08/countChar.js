// total no. of particular character in a string

function numberOfOccurance(string, letter) {
    let count = 0;
    for (i = 0; i < string.length; i++){   
        if (string[i].includes(letter)) {        //if (string[i] === letter)
            count = count +1
        }
    }
    return count;
}

console.log(numberOfOccurance('dct academy' ,  'c'));   //2