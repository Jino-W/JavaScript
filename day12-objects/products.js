const products =[
    {id :1,name: 'marker',price:50},
    {id :2,name: 'pencil',price:10},
    {id :3,name: 'pen',price:100},
    {id :4,name: 'scale',price:15}
];
console.log('Listing Product - ' + products.length);

products.forEach(function(product){
    console.log(product.id + '. ' + product.name + ' INR-'+ product.price +'/-');
})

/* o/p:
Listing Product - 4
1. marker INR-50/-
2. pencil INR-10/-
3. pen INR-100/-
4. scale INR-15/-
*/

for(let i=0;i<products.length;i++){
    console.log(products[i].id + '. ' + products[i].name + ' INR-'+ products[i].price +'/-');
}

//---------------------------------------------

