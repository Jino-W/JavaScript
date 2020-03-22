/*
var library =[
    {
        title:'The Road Ahead',
        autor:'Bill Gates',
        libraryID: 1254
    },
    {
        title:'Walter Icaacson',
        autor:'Steve Jobs',
        libraryID: 4264
    },
    {
        title:'Mockingjay: The final book of hunger',
        autor:'Suzaane Collins',
        libraryID: 3245
    }
];

function sortObj(library){
    for(i=0;i<library.length;i++){
        for(const key in library[i]){
            library[i].sort(function(a,b){
                if(a[key].toLowerCase() < b[key].toUpperCase()
                ) return -1;
                if(a[key].toLowerCase() < b[key].toUpperCase()
                ) return 1;
                return 0;
            })
        }
    } 
}
   


console.log(sortObj(library));
*/ 


const myObj = {
    'b': 'asdsadfd',
    'c': 'masdasaf',
    'a': 'dsfdsfsdf'
  };
const keys = [];
  let k;

for (k in myObj) {
    keys.push(k);
}
console.log(keys);     //[ 'b', 'c', 'a' ]
keys.sort();
console.log(keys);    //[ 'a', 'b', 'c' ]
const newObj ={};

for(let i=0;i<keys.length;i++){
    newObj[i]=keys[i]   //{ '0': 'a', '1': 'b', '2': 'c' }
    console.log(newObj[i])
    /*
    a
    b
    c
    */
    for (k in myObj) {
    if(newObj[i] == k){
        newObj[keys[i]]=myObj[k]
        /*
        { '0': 'a',
          '1': 'b',
          '2': 'c',
          a: 'dsfdsfsdf',
          b: 'asdsadfd',
          c: 'masdasaf' }
        */
        delete newObj[i]   // -> { a: 'dsfdsfsdf', b: 'asdsadfd', c: 'masdasaf' }
    }
}
}
console.log(newObj);