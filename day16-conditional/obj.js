// updtaing property value within 
const counter ={
     count: 0,
     up: function(){
        //this.count=this.count + 1  
        //console.log(this.count);
        //console.log(++this.count) //0   ->don't use post increment (wrong)
        console.log(++this.count)   //1   ->pre increment is possible
     },
     down:function(){
        //this.count=this.count - 1
        console.log(--this.count);  //  ->pre decrement
     },
     reset:function(){
        this.count = 0
        console.log(this.count);
     },
     getCountValue: function(){
        console.log(this.count)
     }
 }


counter.up();
counter.up();
counter.up();
counter.down();
counter.reset();
counter.getCountValue(); 

/*
1
2
3
2
0
0
*/