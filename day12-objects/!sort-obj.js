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
    const result =[];

    for(i=0;i<library.length;i++){
        result.push((Object.keys(library[i])).sort());
    }
    return result
}

console.log(sortObj(library));


/* o/p
[ [ 'autor', 'libraryID', 'title' ],
  [ 'autor', 'libraryID', 'title' ],
  [ 'autor', 'libraryID', 'title' ] ]
*/



const myObj = {
    'b': 'asdsadfd',
    'c': 'masdasaf',
    'a': 'dsfdsfsdf'
  };
const keys = [];

for (let k in myObj) {
    keys.push(k);
}
keys.sort();
const newObj ={}

for(let i=0;i<keys.length;i++){
    newObj[keys[i]]=myObj[keys[i]]
}

console.log(newObj);