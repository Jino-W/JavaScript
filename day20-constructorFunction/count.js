function Counter(count){
    console.log(this)
    this.count= count;
    this.up= function(){
        return  ++this.count;       //this.count=this.count+1;
    }
    this.getCount = function(){
        return `Count = ${this.count}`;
    }
    this.reset = function(){
        return this.count = 0;
    }
}

//object-1
const n1 = new Counter(0);
console.log(n1.up());         //1
console.log(n1.up());         //2
console.log(n1.getCount());   //Count = 2
console.log(n1.reset());      //0
console.log(n1.up());         //1

//object-2
const n2 = new Counter(56);
console.log(n2.up());    //57
console.log(n2.up());    //58
console.log(n2.getCount());  //Count = 58