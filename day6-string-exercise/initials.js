function shortName(name){
    const splitting = name.split(' ');
    let result = '';
    for(let i=0;i<splitting.length;i++){
        result+= splitting[i].charAt(0).toUpperCase();
        //result +=splitting[i][0].toUpperCase();
    }
    return result;
}

console.log(shortName('rahul dravid'));
console.log(shortName('virat kohli'));
console.log(shortName('sachin ramesh tendulkar'));

/* o/p
RD
VK
SRT
*/
