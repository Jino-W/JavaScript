var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

function updateInventory(currentInventory, newInventory){    //here,  updateInventory is impure function 
    for(i=0;i<newInventory.length;i++){
        const result = currentInventory.find(function(item){
            return item.name == newInventory[i].name;
        })
        if(result){
            result.stock = result.stock + newInventory[i].stock;
        }else{
            currentInventory.push(newInventory[i])
        }    
    }
    /*
    newInventory.forEach(function(newInventoryItem)){
        const result = currentInventory.find(function(item){
            return item.name == newInventoryItem.name;
        })
        if(result){
            result.stock = result.stock + newInventoryItem.stock;
        }else{
            currentInventory.push(newInventoryItem)
        } 
    }
    */
    return currentInventory
}   

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];
console.log(updateInventory(currentInventory, newInventory));



/* An 'impure function' is a function that mutates variables/state/data outside of it's lexical scope, thus deeming it “impure” for this reason. 
There are many ways to write JavaScript, and thinking in terms of impure/pure functions we can write code that is much easier to reason with.

Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects).
*/



/*
Following things to keep in mind,
for mobiles, you will need to use a constructor function
method to display the stock
method to add to stock


expected o/p:
[{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30},{name: "LG", stock: 5}]

my o/p:
[ { name: 'HTC', stock: 25 },
  { name: 'Nokia', stock: 1000 },
  { name: 'Samsung', stock: 55 },
  { name: 'Sony', stock: 20 },
  { name: 'Apple', stock: 30 },
  { name: 'LG', stock: 5 } ]

*/