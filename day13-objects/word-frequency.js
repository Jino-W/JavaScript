function wordFreq(str){
    const result ={};
    const words =str.split(', ');
    console.log(words);
    words.forEach(function(word){
        if(result[word]){
            result[word]++;
        }else{
            result[word] = 1;
        }
    })
    return result;
}

console.log(wordFreq('virat, sachin, dhoni, virat, dhoni'));

/* 
o/p:
[ 'virat', 'sachin', 'dhoni', 'virat', 'dhoni' ]
{ virat: 2, sachin: 1, dhoni: 2 }


note:
//if
1)result[word] =>result[virat]=>notfind(i.e,undifined) ->false
2)true ->increment the value
//else
...1)so create that property and set that value to 1;


//Real time application
eg1: how many projects were assigned to the employee
*/