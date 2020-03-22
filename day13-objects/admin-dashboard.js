//real time application admin dashboard

//count of each vowel-character in the given string
function findCountVow(str){
    const result = {a:0, e:0, i:0, o:0, u:0};
    /*
    for(const s of str){
        if(result.hasOwnProperty(s)){
            result[s] += 1;
        }
    }

    str.split('').forEach(function(s){
        if(result.hasOwnProperty(s)){
            result[s] += 1;
        }
    })
    */
    for(i=0;i<str.length;i++){
        if(result.hasOwnProperty(str[i])){
            result[str[i]] +=1  //result[a] +=1
        }
    }
    return result 
}
console.log(findCountVow('bangalore'))

/* note:
-> a
if(result[str[i]]) = if(0) =>if(false)
*/
