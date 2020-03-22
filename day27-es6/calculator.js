class Calculator{
    // no initialisation of parameters, so no need for 'constructor(){}'
    sum(array){
        /*
        let total =0
        array.forEach(function(a){
            total += a
        })
        return total
        */

       return array.reduce(function(total, second){
           return total + second
       }) 
    }
}
const cal = new Calculator()
console.log(cal.sum([10,20,30]))    //60


console.log(Calculator.name) //Calculator


//---------------------------------------

let Rectangle =  class Rect{

}

console.log(Rectangle.name)  //Rect