/* dealing with datas */

/* 1.single object */


var shoe={
    name:'Airmax 2017',
    price:3299,
    freeDelivery:true,
    sizes:[ 7, 7.5, 8, 9 ],
    colors:['blue','black','red'],
    description:'very comfortable running shoe',
    details:{
        asin:'B076C565GF'
    },
    getDetails:function(){
        return this.name +' '+this.price +' '+this.freeDelivery+' '+this.sizes+' '+this.colors+' '+this.description+' '+this.details.asin ;
    }
}

console.log(shoe);


/*  O/P:
{ name: 'Airmax 2017',
  price: 3299,
  freeDelivery: true,
  sizes: [ 7, 7.5, 8, 9 ],
  colors: [ 'blue', 'black', 'red' ],
  description: 'very comfortable running shoe',
  details: { asin: 'B076C565GF' },
  getDetails: [Function: getDetails] }
*/

console.log(shoe.name);                   //Airmax 2017
console.log(shoe.getDetails());

/* o/p:
Airmax 2017 3299 true 7,7.5,8,9 blue,black,red very comfortable running shoe B076C565GF
*/

/*-----------------------------------------------------------------------------------------------------*/


/* 1.Array of object */

var products=[
    {
        firstName:'Airmax 2017',
        cost:3299,
        quantity:1
    },
    {
        firstName:'Mac Book Pro',
        cost:50000,
        quantity:1
    }
]

console.log(products);

/* [ { firstName: 'Airmax 2017', cost: 3299, quantity: 1 },
  { firstName: 'Mac Book Pro', cost: 50000, quantity: 1 } ] 
*/

console.log(products.length);     //2
console.log(products[0]);         //{ firstName: 'Airmax 2017', cost: 3299, quantity: 1 }
console.log(products[1].name);    //Mac Book Pro

//for loop
for(var i=0;i<products.length;i++){
    console.log(i, products[i]);
    console.log(i, products[i].firstName);
}


/*
0 { firstName: 'Airmax 2017', cost: 3299, quantity: 1 }
0 'Airmax 2017'
1 { firstName: 'Mac Book Pro', cost: 50000, quantity: 1 }
1 'Mac Book Pro'
*/

for(var i=0;i<products.length;i++){
    console.log(products[i].firstName +' '+ products[i].price);
}

/*
Airmax 2017 undefined
Mac Book Pro undefined
*/

//for each
products.forEach(function(product){
    console.log(product);
})

/*
{ firstName: 'Airmax 2017', cost: 3299, quantity: 1 }
{ firstName: 'Mac Book Pro', cost: 50000, quantity: 1 }
*/

/*----------------------------------------------------------------------------------------------------*/

//Exercise
/* Define a function calculateTotal to find the cart total,You are given the cart line items*/


var cart=[
    {
        name:'Airmax 2017',
        price:3299,
        quantity:2
    },
    {
        name:'Mac Book Pro',
        price:50000,
        quantity:1
    }
]

console.log('cartTotal is,3299*2 +50000*1 =');                  //cartTotal is,3299*2 +50000*1 =
console.log(calculateTotal(cart));                              //56598

function calculateTotal(cart){
    var sum=0;
    for(i=0;i<cart.length;i++){
        sum= sum+ cart[i].price *cart[i].quantity;
    }

  /*for each

    cart.forEach(function(item){
        sum=sum+ item.price *item.quantity;
    }); */

    return sum;
}

/*----------------------------------------------------------------------------------------------------*/

/* 3.Array of object-11*/
var employees=[
    {
        name:'jino',
        department:'Sales'
    },
    {
        name:'minu',
        department:'Hr'
    },
    {
        name:'sam',
        department:'Sales'
    },
    {
        name:'jim',
        department:'Sales'
    },
    {
        name:'ammu',
        department:'Hr'
    }
];


console.log('Employees in Sales department');

//for loop:

for(i=0;i<employees.length;i++){
    if(employees[i].department==='Sales'){
        console.log(employees[i].name);
    }
}

/*    o/p:
jino
sam
jim   */

console.log('\n\n');

//for each

employees.forEach(function(employee){
    if(employee.department==='Hr'){
        console.log(employee.name);
    }
});

/*   o/p:
minu
ammu  */

