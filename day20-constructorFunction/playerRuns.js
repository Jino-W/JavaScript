//Constructor Function
function Player(name, runs){
    this.name = name;
    this.runs =runs;
    this.matchesPlayed = function(){
        return this.runs.length;
    }
    
    //reduce()
    this.findTotal = this.runs.reduce(function(acc,nxt){   //this.findTotal is a property, not a method
        return acc + nxt;
    })
    
    //Math.round()
    this.Average = function(){
        return Math.round(this.findTotal/this.matchesPlayed());   //Math.round(36.666666666666664)
    }

    // #reduce()     #Math.round()
    this.TotalAvg = this.runs.reduce((acc,nxt,index)=>{   //this.findTotal is a property, not a method
        acc += nxt;
        if(index === this.runs.length-1){
            const Avg = Math.round(acc/this.matchesPlayed());
            return [`Total runs = ${acc}`, `Average = ${Avg}`]
        }else{
            return acc;
        }
    })


    this.Runs = function(){
        return this.findTotal;
    }
}

//Object-1
const Dhoni = new Player('dhoni',[20,30,60]);
console.log(Dhoni.findTotal);               //110
console.log(Dhoni.Runs());                //110
console.log(Dhoni.matchesPlayed());        //3
console.log(Dhoni.Average());               //37
console.log(Dhoni.TotalAvg);          //[ 'Total runs = 110', 'Average = 37' ]*

//Object-2
const Sachin = new Player('sachin',[100,90,60,50,80]);
console.log(Sachin.findTotal);               //380
console.log(Sachin.Runs());                //380
console.log(Sachin.matchesPlayed());        //5
console.log(Sachin.Average());                //76
console.log(Sachin.TotalAvg);       //[ 'Total runs = 380', 'Average = 76' ]

