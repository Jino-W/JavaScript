const person = {
    name:'arjune',
    city:'bangalore',
    details1: function(){
        return person.name +' lives in '+ person.city   //accessing via obj_name
    },
    details2: function(){
        return this.name +' lives in '+ this.city    //accessing via 'this' keyword (preferable)
    }
}

console.log(person);
/*
{ name: 'arjune',
  city: 'bangalore',
  details1: [Function: details1],
  details2: [Function: details2] }
*/
console.log(person.details1());      //arjune lives in bangalore
console.log(person.details2());   //arjune lives in bangalore