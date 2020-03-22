//count of each character in the given string
function charCounter(str){
    const result ={};
    const words =str.split('');
    words.forEach(function(word){
        if(result[word]){
            result[word]++
        }else{
            result[word] = 1;
        }
    })
    return result 
}
console.log(charCounter('aaabbccdef'));   //{ a: 3, b: 2, c: 2, d: 1, e: 1, f: 1 }