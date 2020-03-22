const cart =[];
function addToCart(cart, product){
    const cartItem = cart.find(function(item){
        return item.id == product.id
    })
    if(cartItem){
        cartItem.quantity = cartItem.quantity + product.quantity;
        //:shifting array elt from one position to another
        let fromIndex =cart.indexOf(cartItem);  //index of that founded item(i.e,cartItem)
        console.log(fromIndex);
        cart.splice(fromIndex, 1); //deleting cartItem which is in the particular position
        cart.splice(0, 0, cartItem);    //adding cartItem at the 0'th position
    }
    else{
        cart.unshift(product);    //:adding new item at the beginning of the array(cart)
    }
    return cart;    
}

console.log('user cart', cart);       //user cart []

console.log(addToCart(cart, {id:1,name:'The alchemisst',price:950,quantity:1}));
console.log(addToCart(cart, {id:2,name:'1985',price:950,quantity:1}));
console.log(addToCart(cart, {id:1,name:'The alchemisst',price:950,quantity:1}));
console.log(addToCart(cart, {id:2,name:'1985',price:950,quantity:1}));

/*
 o/p:
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 1 } ]
[ { id: 2, name: '1985', price: 950, quantity: 1 },
  { id: 1, name: 'The alchemisst', price: 950, quantity: 1 } ]
1
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 2 },
  { id: 2, name: '1985', price: 950, quantity: 1 } ]
1
[ { id: 2, name: '1985', price: 950, quantity: 2 },
  { id: 1, name: 'The alchemisst', price: 950, quantity: 2 } ]
*/



/*

const cart =[];
function addToCart(cart, product){
    const cartItem = cart.find(function(item){
        return item.id == product.id
    })
    if(cartItem){
        cartItem.quantity = cartItem.quantity + product.quantity;
    }
    else{
        cart.push(product);    //:adding new item at the end of the array(cart)
    }
    return cart;    
}

console.log('user cart', cart);

console.log(addToCart(cart, {id:1,name:'The alchemisst',price:950,quantity:1}));
console.log(addToCart(cart, {id:2,name:'1985',price:950,quantity:1}));
console.log(addToCart(cart, {id:1,name:'The alchemisst',price:950,quantity:1}));
console.log(addToCart(cart, {id:2,name:'1985',price:950,quantity:1}));

o/p:
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 1 } ]
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 1 },
  { id: 2, name: '1985', price: 950, quantity: 1 } ]
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 2 },
  { id: 2, name: '1985', price: 950, quantity: 1 } ]
[ { id: 1, name: 'The alchemisst', price: 950, quantity: 2 },
  { id: 2, name: '1985', price: 950, quantity: 2 } ]

*/