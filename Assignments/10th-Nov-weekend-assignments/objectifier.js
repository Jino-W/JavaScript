function objectifier(array) {
    let object={};
    array.map(arr => {
        let obj={}
        for (i = 0; i < arr[1].length-1; i+=2){
            obj[arr[1][i]] = arr[1][i+1]
        }
       object[arr[0]] = obj
    }) 
    return object
}

var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ];

console.log(objectifier(data))