var operation=['add','sub','mul','div'];

for(var i=0;i<operation.length;i++){
    console.log(5,2,operation[i]);
    console.log(arithmetic(5,2,operation[i]));
}


function arithmetic(a,b,c){
    if(c==='add'){
        return a+b;
    }
    else if(c==='sub'){
        return a-b;
    }
    else if(c==='mul'){
        return a*b;
    }
    else{
        return a/b;
    }
}

/* o/p:
5 2 'add'
7
5 2 'sub'
3
5 2 'mul'
10
5 2 'div'
2.5
*/