/*
  var numbers=[10,-10,20,-20,30,-30] ;
  sumCount(numbers);
  Ans:[sum of positive, count of negative]          i.e,[60,3] 
*/

function sumCount(numbers){
    var sum=0;
    var count=0;
    

    for(var i=0;i<numbers.length;i++){
        if(numbers[i]>=0){
            sum= sum + numbers[i];
        }
        else{
            count= count + 1;
        }
    }
    
    return [sum,count];
}

var numbers=[10,-10,20,-20,30,-30];
console.log(sumCount(numbers));                //[ 60, 3 ]