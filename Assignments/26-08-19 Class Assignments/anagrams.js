// convert strings to LC for case insensitivity
// split strings into arrays
// sort the arrays (spaces will sort first and be trimmed later)
// join the arrays back into strings
// we're only concerned about the printable characters in the anagram so,
// trim() to remove any spaces and then compare the resulting strings


var str1 = this.word1.toLowerCase().split('').sort().join('').trim();
var str2 = this.word2.toLowerCase().split('').sort().join('').trim();

if (str1 === str2) {
    this.isAnagram = true;
} else {
    this.isAnagram = false;
}


//-----------------------------------------------------------------------------------------
https://stackoverflow.com/questions/23785465/javascript-anagram-comparison

function compare(a,b) {
    var c = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var d = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
        return (c ===d) ? "Anagram":"Not anagram";
}

console.log(anagramCheck('ELvis','lives'));  //true