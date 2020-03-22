function Tag(str){
    this.result ='#';
    this.generate = function(str){
        const array = str.split(' ');
        console.log(array)
        /*
        #for-loop
        for(i=0;i<array.length;i++){
            this.result += array[i][0].toUpperCase()+ array[i].slice(1).toLowerCase();
        }
        */


       /* -> #forEach, #arrowfun

        array.forEach((a)=>{
            this.result = this.result + (a[0].toUpperCase()+ a.slice(1).toLowerCase());
            console.log(this.result)
       })*/


        /* #forEach, #that=this

        let that = this;
        array.forEach(function(a){
        console.log(that)
        that.result = that.result + (a[0].toUpperCase()+ a.slice(1).toLowerCase());
        })
        */


       //#forEach, #bind(this)
        array.forEach(function(a){
        console.log(this)
        this.result += (a[0].toUpperCase()+ a.slice(1).toLowerCase());
        }.bind(this));



       return this.result
    }
}


const string1 = new Tag();
console.log(string1.generate('hello world'))   //#HelloWorld
console.log(string1.result)

