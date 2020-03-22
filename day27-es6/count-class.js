
//class- declaration doesn't get hoisted
//const c2 = new Counter(0)      //ReferenceError: Counter is not defined
//console.log(c2.up())  
 
class Counter{          //syntactical sugar over the constructor function
    constructor(count){
        this.count = count
        this.Reset = count
    }
    up(){
        console.log(this)        //Counter { count: 0, Reset: 0 }      //Counter { count: 1, Reset: 0 }    //Counter { count: 2, Reset: 0 }
        return this.count += 1
    }
    down(){
        return this.count -= 1
    }
    reset(){
        return this.Reset     //resetting to the initial value
    }
    getCount(){
        return this.count
    }
}

const c1 = new Counter(0)
console.log(c1.up())  //1
console.log(c1.up())  //2
console.log(c1.getCount())   //2
console.log(c1.up())    //3
console.log(c1.down()) //2
console.log(c1.getCount()) //2
console.log(c1.reset())  //0
console.log(c1.getCount())  //0