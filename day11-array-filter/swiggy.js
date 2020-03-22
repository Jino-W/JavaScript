//Swiggy
const menuItems =[
    {id:1, name:'chilly chicken', isVeg:false, type:'starters'},
    {id:2, name:'panner 65', isVeg:true, type:'main Course'},
    {id:3, name:'mutton biriyani', isVeg:false, type:'starters'},
    {id:4, name:'veg fried rice', isVeg:true, type:'main Course'}
];


//print the array of veg items
function vegItems(menuItems){
    const Veg = menuItems.filter(function(menuItem){
        return menuItem.isVeg
        /*non-veg
        // return menuItem == false
        //return !menuItem.isVeg
        */
    })
    return Veg;
}
console.log(vegItems(menuItems));
/*[ { id: 2, name: 'panner 65', isVeg: true, type: 'mainCourse' },
  { id: 4, name: 'veg fried rice', isVeg: true, type: 'mainCourse' } ]
*/


//print the array of vegItem names alone
const vegItemsNames = vegItems(menuItems);

console.log('listing items', vegItemsNames.length);

vegItemsNames.forEach(function(vegItemName){
    console.log(vegItemName.name);
})

/*
panner 65
veg fried rice
*/

//:print the array of starters
function TypeStarters(menuItems, typeOf){
    return menuItems.filter(function(menuItem){
        return menuItem.type == typeOf;
    })
}

console.log(TypeStarters(menuItems, 'starters'));
/*
[ { id: 1, name: 'chilly chicken', isVeg: false, type: 'starters' },
  { id: 3, name: 'mutton biriyani', isVeg: false, type: 'starters' } ]
*/
console.log(TypeStarters(menuItems, 'deserts'));   //[]

//print the array of starters name
const typeNames = TypeStarters(menuItems, typeOf)
console.log(typeNames);
typeNames.forEach(function(typeName){
    console.log(typeName.name);
})
