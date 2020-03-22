/*
//data structures are basically array and object like structures
//http://jsonplaceholder.typicode.com/users


//javascript object to Json => stringfy()
//Json to javascript => parse()

const myObj = {
    name: 'Skip',
    age: 2,
    favoriteFood: 'Steak'
};
  
  const myObjStr = JSON.stringify(myObj);
  
  console.log(myObjStr);
  // "{"name":"Skip","age":2,"favoriteFood":"Steak"}"
  
  console.log(JSON.parse(myObjStr));
  // Object {name:"Skip",age:2,favoriteFood:"Steak"}

*/


const user ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}


console.log('name:',user.name)
console.log('lat:',user.address.geo.lat , 'lng:', user.address.geo.lng)
console.log('bs:',user.company.bs)
console.log('website:',user.website)

/*
name: Leanne Graham
lat: -37.3159 lng: 81.1496
bs: harness real-time e-markets
website: hildegard.org
*/