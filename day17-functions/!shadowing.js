var currencySymbol = "$";

function showMoney(amount) {
  var currencySymbol = "€";
  return currencySymbol + amount;
}

console.log(showMoney('100'));


//-----------------------------------------

let name="tara"
if(true){
  let name="ali"
  if(true){
    console.log(name)
  }
}


/*
variable shadowing is when a variable in a local scope uses its value instead of a variable in a parent scope.So the local variables value is shadowing over the parents.

in the above code there are two name variables defined but they are not defined in the same scope. so console.log(name) will check the local scope if it finds the name variable it uses it, if not it checks parent scope once finds it, it uses that one so it does not go the root.
*/