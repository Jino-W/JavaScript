// finding no. of vowels in the string
// #includes()
function findVowels(str){
    const vowels='aeiou';
    let count =0;
    for(var i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count= count+1;
        }
    }
    return count;
}

console.log(findVowels('bangalore'));

//--------------------------------------------------------

//// #indexOf()
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));