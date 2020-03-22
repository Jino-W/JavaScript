/*
function primeNum(count){
    var times;
    var factor;
    var number=3;                                                    // number after 2(prime number) to check
    for(times=1;times<=count-1;times++){
        if(times===1){
            console.log('times',times,':');
            console.log(2);
        }
        else{  
            console.log('times',times,':'); 
            console.log(number,':');                                                      //prime number or not check  (for each natural number)
            for(factor=2;factor<=number-1;factor++){
                if(number%factor===0){
                    console.log(number,'- not prime number');
                    break; 
                }
            }
            if(number===factor){
                console.log(number,'- prime number');
            }
            number++;
        }
        
    }

}

console.log(primeNum(10));
console.log(primeNum(25));
*/

//-----------------------------------------------------------------------------------------

function primeNum(count){
    var times;
    var factor;
    var number=3;
    var b=[];                                                  // number after 2(prime number) to check
    
    for(times=1;times<=count-1;times++){
        if(times===1){
            var v=2;
            b.push(v);
        }
        else{                                                    //prime number or not check  (for each natural number)
            for(factor=2;factor<=number-1;factor++){
                if(number%factor===0){
                    break; 
                }
            }
            if(number===factor){
                b.push(number);
            }
            number++;
        }   
    }
    c=b.toString();
    return c;
}

console.log('\nprime numbers within no.10:\n');
console.log(primeNum(10));
console.log('\n\nprime numbers within no.25:\n');
console.log(primeNum(25));





