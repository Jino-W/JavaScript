class Product{
    constructor(data){
        this.name = data.name
        this.price = data.price
    }
    shortInfo(){
        return this.name + ' INR ' + this.price 
    }
}

const p = new Product({name:'product', price: 175})

console.log(p)  //Product { name: 'product', price: 175 }
console.log(p.shortInfo())   //product INR 175


//--------------------------------------------



//inheritance -> properties and methods of one class(parent) is available to you in another class(child)
class Mobile extends Product{    //keyword: extence
    constructor(data1){
        super(data1)                //super(arg) -> invoke the same method in parent class
        this.name='hari'
        this.brand = data1.brand
        this.make = data1.make
    }
    shortInfo1(){
        return `${super.shortInfo()} ${this.brand} ${this.make}`   //note: ${this.shortInfo()}  ->  //jino xiami mi3
    }
    shortInfo(){ 
        return `jino ${super.name}`    //method overriding    //jino undefined
    }
}

const m = new Mobile({name:'mi', price: 5000, brand: 'xiami',make:'mi3'})
console.log(m) //Mobile { name: 'mi', price: 5000, brand: 'xiami', make: 'mi3' }
console.log(m.shortInfo1())  //mi INR 5000 xiami mi3
console.log(m.shortInfo())    //'jino'
console.log(m.name)        //mi


//shortInfo1(){
//${super.shortInfo()}  ->  //mi INR 5000 xiami mi3
//${this.shortInfo()}  ->  //jino xiami mi3
//}
/*
super is used to call the constructor , methods and properties of parent class. You may also use the super keyword in the sub class when you want to invoke a method from the parent class when you have overridden it in the subclass.
*/


//------------------------------------

var obj1 = {
    method1() {
      return 'hai, jino'
    }
  }
  
  var obj2 = {
    method2() {
      console.log('3',super.method1());              //3 hai, jino
      console.log('2',this.method1());             //2 hai, jino
      return 'hai, hari'                
    }
  }
  
 Object.setPrototypeOf(obj2, obj1);
 console.log('1',obj2.method2()); // hai, jino



